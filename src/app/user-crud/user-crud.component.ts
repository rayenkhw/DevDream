import { Component, OnInit } from '@angular/core';


import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'app/Models/user';
import { AuthService } from 'app/Services/UserService/auth.service';
import { UserService } from 'app/Services/UserService/user.service';
import { UserAddComponent } from 'app/user-add/user-add.component';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})

export class UserCrudComponent implements OnInit {
  userss : User[];
  user: any;
  private allUsers = []; 
  
  constructor(private userService : UserService ,private authService: AuthService) { }

  ngOnInit(): void {
this.getUsers();

this.user = this.authService.getUserDetails();

  }
  private getUsers(){

    this.userService.getUserList().subscribe(data => 
      { this. userss = data; 
        this.allUsers = data; // Conserver une copie des données non filtrées

      console.log(this.userss);
      
    }
      );
  }
  

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(response => {
      console.log('Utilisateur supprimé', response);
      // Rafraîchir la liste des utilisateurs après la suppression
      this.getUsers();
    }, error => {
      console.error('Erreur lors de la suppression de l’utilisateur', error);
    });
  }
  openAddEditEmpForm() {
    // const dialogRef = this._dialog.open(UserAddComponent);
    // dialogRef.afterClosed().subscribe({
    //   next: (val) => {
    //     if (val) {
    //       this.getUsers();
    //     }
    //   },
    // });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase(); // Récupérer la valeur de l'input et la normaliser

    if (!filterValue) {
      this.userss = this.allUsers; // Si la chaîne de recherche est vide, réaffecter tous les utilisateurs
      return;
    }
  
    this.userss = this.allUsers.filter(user => 
     
       user.nom.toLowerCase().includes(filterValue) ||
       user.cin.toLowerCase().includes(filterValue) ||
       user.email.toLowerCase().includes(filterValue) ||
       user.role.toLowerCase().includes(filterValue) ||
       user.identifiant.toLowerCase().includes(filterValue) ||
       user.prenom.toLowerCase().includes(filterValue));
      
  
}
}
