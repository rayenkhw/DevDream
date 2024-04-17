import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Tache } from 'app/Models/tache';
import { TacheService } from 'app/Services/TacheService/tache.service';
import Chart from 'chart.js/auto';

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
  @ViewChild('doughnutChart') doughnutChartRef: ElementRef;
  doughnutChart: any;

  todoCount: number;
  inProgressCount: number;
  doneCount: number;


  description: string;
  priorite: number;
  constructor(private tacheService:TacheService) { }


  ngOnInit(): void {
    this.loadStatistics();
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

 
  loadStatistics(): void {
    this.tacheService.getTachesTodoCount().subscribe(todoCount => {
      this.tacheService.getTachesInProgressCount().subscribe(inProgressCount => {
        this.tacheService.getTachesDoneCount().subscribe(doneCount => {
          this.createDoughnutChart(todoCount, inProgressCount, doneCount);
        });
      });
    });
  }

  createDoughnutChart(todoCount: number, inProgressCount: number, doneCount: number): void {
    this.doughnutChart = new Chart(this.doughnutChartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Tâches à faire', 'Tâches en cours', 'Tâches terminées'],
        datasets: [{
          label: 'Tâches',
          data: [todoCount, inProgressCount, doneCount],
          backgroundColor: [
            '#4A4A4A', // Gris
            '#FF5252', // Rouge
            '#000000'  // Noir
          ],
          borderColor: [
            '#4A4A4A', // Gris
          '#FF5252', // Rouge
          '#000000'  // Noir
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Ajoutez cette ligne pour désactiver l'aspect ratio
      aspectRatio: 1, // Ajoutez cette ligne pour définir le rapport hauteur/largeur
      plugins: {
        legend: {
          position: 'top', // Positionnez la légende en haut
        }
      }
    }
    });
  }



}


