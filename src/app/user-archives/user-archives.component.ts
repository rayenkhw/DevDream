import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/service/user.service';
import { User } from 'app/user';

@Component({
  selector: 'app-user-archives',
  templateUrl: './user-archives.component.html',
  styleUrls: ['./user-archives.component.css']
})
export class UserArchivesComponent implements OnInit {
  userss : User[];
  private allUsers = []; 
  constructor(private userService : UserService ) { }

  ngOnInit(): void {
this.getUsers();

  }
  private getUsers(){

    this.userService.getUserArchives().subscribe(data => 
      { this. userss = data; 
        this.allUsers = data; // Conserver une copie des données non filtrées

      console.log(this.userss);
      
    }
      );
  }

  deleteUserArchives(id: number): void {
    this.userService.deleteUserArchives(id).subscribe(response => {
      console.log('Utilisateur supprimé', response);
      // Rafraîchir la liste des utilisateurs après la suppression
      this.getUsers();
    }, error => {
      console.error('Erreur lors de la suppression de l’utilisateur', error);
    });
  }

}

