import { Component, OnInit } from '@angular/core';
import { Stage} from 'app/Models/stage';
import { StageService } from 'app/Services/StageService/stage.service';

@Component({
  selector: 'app-updatestage',
  templateUrl: './updatestage.component.html',
  styleUrls: ['./updatestage.component.css']
})
export class UpdatestageComponent implements OnInit {
  stages: Stage[] = []; // Liste des commentaires disponibles
  stageSelectionne: Stage | null = null; 
  constructor(private stageservice: StageService) { }

  ngOnInit(): void {
    this.loadStages(); 
  }
  
  loadStages(): void {
    this.stageservice.getAllStages().subscribe((data: Stage[]) => {
      this.stages = data;
    });
  }
  
  selectStage(stage: Stage): void {
    this.stageSelectionne = stage; // Sélectionnez le commentaire choisi par l'utilisateur
  }
  updateStage(): void {
    if (this.stageSelectionne) {
      this.stageservice.updateStage(this.stageSelectionne.id_stage,this.stageSelectionne)
        .subscribe(() => {
          console.log('stage mis à jour avec succès');
          // Réinitialisez le commentaire sélectionné après la mise à jour réussie
          this.stageSelectionne = null;
        }, error => {
          console.error('Erreur lors de la mise à jour du stage : ', error);
        });
    }
  }

}
