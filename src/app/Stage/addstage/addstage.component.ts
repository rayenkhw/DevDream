import { Component, OnInit } from '@angular/core';
import { StageService } from 'app/Services/StageService/stage.service';
import { Stage } from 'app/Models/stage';

@Component({
  selector: 'app-addstage',
  templateUrl: './addstage.component.html',
  styleUrls: ['./addstage.component.css']
})
export class AddstageComponent implements OnInit {
  nouveauStage: Stage = new Stage(); // Créez une nouvelle instance de stage pour lier les données du formulaire

  constructor(private stageservice: StageService) { }

  ngOnInit(): void {
  }

  ajouterStage(): void {
    this.stageservice.saveStage(this.nouveauStage).subscribe(() => {
      console.log('Stage ajouté avec succès');
      // Réinitialiser le formulaire ou faire d'autres actions après l'ajout réussi
      this.nouveauStage = new Stage();
    }, error => {
      console.error('Erreur lors de l\'ajout du stage : ', error);
    });
  }
}
