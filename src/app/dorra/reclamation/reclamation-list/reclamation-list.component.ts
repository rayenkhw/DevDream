import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../reclamation.module';
import { ReclamationService } from '../reclamation.service';
import { ReponseService } from 'app/dorra/reponse/reponse.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})


export class ReclamationListComponent implements OnInit {
  
  reclamations: Reclamation[]=[];
  

  constructor(private reclamationService: ReclamationService,private router: Router) {}

  ngOnInit(): void {
    this.loadReclamations();

  }

  loadReclamations(): void {
    this.reclamationService.getReclamations().subscribe(
      (data: Reclamation[]) => {
        this.reclamations = data;
      },
      (error) => {
        console.error('affichage maye5demch', error);
      }
      
    );
    
  }
  addReponse(id_Reclamation: number): void {
    this.reclamationService.retrieveReclamation(id_Reclamation).subscribe(
      (reclamation: Reclamation) => {
        this.router.navigate(['/admin/ajout-reponse-admin/'+ id_Reclamation]);
      },
      (error) => {
        console.error('Error retrieving reclamation:', error);
      }
    );
  }
  // addReponse(id_reclamation: number): void {
  //   this.reclamationService.retrieveReclamation
  //   // Navigate to the modify-depot page and pass the id_depot as a route parameter
  //   this.router.navigate(['/admin/ajout-reponse-admin/' + id_reclamation]);
  // }
  // removeReclamation(id_Reclamation: number): void {
  //   this.reclamationService.removeReclamation(id_Reclamation).subscribe(
  //     () => {
  //       this.loadReclamations(); // Recharge les reclamations après la suppression
  //     },
  //     error => {
  //       console.error('Erreur lors de la suppression de l\'reclamation :', error);
  //     }
  removeReclamation(id_Reclamation: number): void {
    this.reclamationService.removeReclamation(id_Reclamation).subscribe(
      () => {
        this.loadReclamations(); // Refresh the reclamations after deletion
      },
      error => {
        console.error('Error removing reclamation:', error);
      }
    );
  }
}


