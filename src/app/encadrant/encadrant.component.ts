import { Component, OnInit } from '@angular/core';
import { Tache } from 'app/Models/tache';
import { TacheService } from 'app/Services/TacheService/tache.service';

@Component({
  selector: 'app-encadrant',
  templateUrl: './encadrant.component.html',
  styleUrls: ['./encadrant.component.css']
})
export class EncadrantComponent implements OnInit {
  idEncadrant: number;
  idEtudiant: number;
  tache: Tache = new Tache();
  identifiantEtudiant:String;
  identifiantEncadrant:String;

  description: string;
  priorite: number;
  constructor(private tacheService:TacheService) { }

  ngOnInit(): void {
  }
  assignerTache(): void {
    // Vérifiez si idEncadrant est défini avant d'appeler la méthode assignerTache
    if (!this.identifiantEncadrant) {
      console.error("L'ID de l'encadrant n'est pas défini.");
      return;
    }

    this.tacheService.assignerTacheByIdentifiant(this.identifiantEncadrant, this.identifiantEtudiant, this.tache)
      .subscribe(nouvelleTache => {
        console.log('Tâche assignée avec succès : ', nouvelleTache);
        // Peut-être rediriger l'utilisateur ou effectuer d'autres actions après l'assignation
      });
  }

}
