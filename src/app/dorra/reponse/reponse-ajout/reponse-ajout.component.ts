import { Component, OnInit } from '@angular/core';
import { ReponseService } from '../reponse.service';
import { Reponse } from '../reponse.module';
@Component({
  selector: 'app-reponse-ajout',
  templateUrl: './reponse-ajout.component.html',
  styleUrls: ['./reponse-ajout.component.css']
})
export class ReponseAjoutComponent implements OnInit {
  newReponse: Reponse = new Reponse();
  
  constructor(private reponseService: ReponseService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.reponseService.addReponse(this.newReponse).subscribe(
      (response) => {
        console.log('Reponse added successfully:', response);
        // You can add further logic here, such as redirecting to a different page.
      },
      (error) => {
        console.error('Error adding reclamation:', error);
        // Handle the error as needed.
      }
    );
  }
}
