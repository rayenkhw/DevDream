import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../reclamation.module';
import { ReclamationService } from '../reclamation.service';
@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})


export class ReclamationListComponent implements OnInit {
  
  reclamations: Reclamation[]=[];

  constructor(private reclamationService: ReclamationService) {}

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
  removeReclamation(id_reclamation: number): void {
    this.reclamationService.removeReclamation(id_reclamation).subscribe(
      () => {
        this.loadReclamations(); // Recharge les reclamations après la suppression
      },
      error => {
        console.error('Erreur lors de la suppression de l\'reclamation :', error);
      }
    )
  }
}


