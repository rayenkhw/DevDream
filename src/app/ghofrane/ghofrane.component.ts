import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Tache } from 'app/Models/tache';
import { User } from 'app/Models/user';
import { TacheService } from 'app/Services/TacheService/tache.service';
import { AuthService } from 'app/Services/UserService/auth.service';
import { EncadrementService } from 'app/Services/encadrement/encadrement.service';
import { AddtacheComponent } from 'app/Tache/addtache/addtache.component';
import { ActivatedRoute } from '@angular/router';
import { DetailetudianttacheComponent } from 'app/Tache/detailetudianttache/detailetudianttache.component';
import { Client } from '@stomp/stompjs';
import { Location } from '@angular/common';
import * as SockJS from 'sockjs-client';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-ghofrane',
  templateUrl: './ghofrane.component.html',
  styleUrls: ['./ghofrane.component.css']
})
export class GhofraneComponent implements OnInit {

  showDoughnutChart: boolean = false;
    showStudentDetails: boolean = false;

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
  
  nomUtilisateur: string;

  stompClient: any;
  callMessage: string;

  dateActuelle: string;
  totalTachesAffectees: number;
  totalEtudiantsEncadres: number;
  nombreTachesTermineesEncadrees: number;
  pourcentageTachesTermineesParRapportAuTotal: number;
  fileNameDialogRef: MatDialogRef<AddtacheComponent>;
  @Input() selectedTacheId: number;
  @Input() selectedTache: Tache;
  etudiantsEncadres: User[] = [];
  tasks: Tache[];
  selectedEtudiant: User;

  constructor(private location: Location,private router:Router,private dialog: MatDialog,private authService: AuthService,private tacheService: TacheService,
    private encadrementService: EncadrementService) { 
      this.initializeWebSocketConnection();
    }

  ngOnInit(): void {
    // Récupérer les informations sur l'utilisateur connecté
    if (this.authService.isAuthenticated()) {
    const userDetails = this.authService.getCurrentUserDetails();
    this.nomUtilisateur = userDetails.nom;}
    // Obtenir la date actuelle
    this.dateActuelle = this.getCurrentDate();

    this.getEtudiantsEncadres();
    this.getEncadrantTasks();
    this.getNombreTachesAffectees();
    this.getNombreEtudiantsEncadres();
    this.getNombreTachesTermineesEncadrees();
     // Écoutez les événements de navigation
  this.router.events
  .pipe(filter(event => event instanceof NavigationEnd))
  .subscribe(() => {
    // Mettez à jour les tâches ici
    this.getEncadrantTasks();
  });

   
  }

  calculatePercentage(): void {
    if (this.totalTachesAffectees > 0) {
      const percentage = (this.nombreTachesTermineesEncadrees / this.totalTachesAffectees) * 100;
      this.pourcentageTachesTermineesParRapportAuTotal = parseFloat(percentage.toFixed(2));
    } else {
        this.pourcentageTachesTermineesParRapportAuTotal = 0;
    }
}
  
  getNombreTachesTermineesEncadrees(): void {
    this.authService.getEncadrantId().subscribe(
      encadrantId => {
    this.tacheService.countTachesTermineesEncadrees(encadrantId).subscribe(
      count => {
        this.nombreTachesTermineesEncadrees = count;
        this.calculatePercentage();
      },
      error => {
        console.log('Une erreur s\'est produite lors de la récupération du nombre de tâches terminées encadrées : ', error);
      }
    );},
    error => {
      console.log('Erreur lors de la récupération de l\'ID de l\'encadrant : ', error);
    }
  );
  }
  toggleDoughnutChart(): void {
    this.showDoughnutChart = !this.showDoughnutChart;
  }

  getNombreTachesAffectees() {
    this.authService.getEncadrantId().subscribe(
      encadrantId => {
        this.tacheService.countTachesAffectees(encadrantId).subscribe(
          data => {
            this.totalTachesAffectees = data;
            this.calculatePercentage();
          },
          error => {
            console.log('Erreur lors de la récupération du nombre de tâches affectées : ', error);
          }
        );
      },
      error => {
        console.log('Erreur lors de la récupération de l\'ID de l\'encadrant : ', error);
      }
    );
  }
  getEtudiantsEncadres(): void {
    this.authService.getEncadrantId().subscribe(encadrantId => {
      this.encadrementService.getEtudiantsEncadres(encadrantId)
        .subscribe(etudiants => this.etudiantsEncadres = etudiants);
    });
  }


  getCurrentDate(): string {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return currentDate.toLocaleDateString('fr-FR', options);
  }

  getEncadrantTasks(): void {
    // Appel du service d'authentification pour récupérer l'ID de l'encadrant
    this.authService.getEncadrantId().subscribe(
      encadrantId => {
        // Utilisation de l'ID de l'encadrant pour récupérer les tâches des étudiants encadrés
        this.tacheService.getTasksForSupervisor(encadrantId).subscribe(
          tasks => {
            this.tasks = tasks;
          },
          error => {
            console.error('Une erreur s\'est produite lors de la récupération des tâches : ', error);
          }
        );
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération de l\'ID de l\'encadrant : ', error);
      }
    );
    }

    getStudentName(task: Tache): string {
      // Trouver l'étudiant correspondant à la tâche
      const etudiant = this.etudiantsEncadres.find(etudiant => etudiant.identifiant === task.etudiant.identifiant);
      // Retourner le nom de l'étudiant ou une chaîne vide s'il n'y a pas d'étudiant correspondant
      return etudiant ? `${etudiant.nom} ${etudiant.prenom}` : '';
  }

  getNombreEtudiantsEncadres() {
    this.authService.getEncadrantId().subscribe(
      encadrantId => {
        this.tacheService.countEtudiantsEncadres(encadrantId).subscribe(
          data => {
            this.totalEtudiantsEncadres = data;
          },
          error => {
            console.log('Erreur lors de la récupération du nombre d\'étudiants encadrés : ', error);
          }
        );
      },
      error => {
        console.log('Erreur lors de la récupération de l\'ID de l\'encadrant : ', error);
      }
    );
  }
  open() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '25%';
  
    this.fileNameDialogRef = this.dialog.open(AddtacheComponent, dialogConfig);
  
    // Abonnez-vous à l'événement tacheAdded émis par AddtacheComponent
    this.fileNameDialogRef.componentInstance.tacheAdded.subscribe((nouvelleTache: Tache) => {
      // Mettez à jour la liste des tâches avec la nouvelle tâche ajoutée
      this.tasks.push(nouvelleTache);
    });
  }
  
  onDetailsClick(tache: Tache) {
    console.log('onDetailsClick method called with parameter:', tache);
    if (!tache || !tache.id_tache) {
      console.error('Invalid task object received in onDetailsClick method.');
      return;
    }
  
    console.log('Tache:', tache); // Log the value of tache
    const encadrantIdentifiant = this.authService.getCurrentUserDetails().identifiant;
    const etudiantIdentifiant = tache.etudiant.identifiant;
  
    this.tacheService.getTacheDetailsByIdAndEncadrantAndEtudiant(tache.id_tache, encadrantIdentifiant, etudiantIdentifiant)
      .subscribe(
        (details) => {
          if (details) {
            this.selectedTache = details;
            this.selectedTacheId = tache.id_tache;
            this.loadStatistics();
            // Navigate to detailtacheencadrant component with the selected tache ID
            this.router.navigate(['/user/detailtacheencadrant', this.selectedTacheId ]);
          } else {
            console.error('Invalid Tache ID provided:', tache.id_tache);
          }
        },
        (error) => {
          console.error('Error retrieving task details: ', error);
        }
      );
  }
  
  onDetailsClickEtudiant(etudiant: User) {
    // Mettez à jour la propriété selectedEtudiant avec l'étudiant sélectionné
    this.selectedEtudiant = etudiant;
    const etudiantId = this.selectedEtudiant.idUser;
    this.loadStatistics();

    // Ouvrir le dialogue pour afficher les détails de l'étudiant
    const dialogRef = this.dialog.open(DetailetudianttacheComponent, {
        width: '500px',
        data: { etudiant: this.selectedEtudiant,etudiantId: etudiantId }
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.selectedEtudiant = null;
    });
}



initializeWebSocketConnection() {
  /*const socket = new SockJS('http://localhost:8080/ws');
  this.stompClient = Stomp.over(socket);
  this.stompClient.connect({}, () => {
    this.stompClient.subscribe('/user/topic/call', (message) => {
      this.callMessage = message.body;
    });
  });*/
}

initiateCall(recipientId: string) {
  this.stompClient.send('/app/initiateCall', {}, recipientId);
}

joinCall(userId: string) {
  this.stompClient.send('/app/joinCall', {}, userId);
}

endCall(userId: string) {
  this.stompClient.send('/app/endCall', {}, userId);
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
  
  

  

