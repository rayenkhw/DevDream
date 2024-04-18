import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache, Tache_status } from 'app/Models/tache'; // Assuming Tache_status is imported from your models
import { TacheService } from 'app/Services/TacheService/tache.service';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  @ViewChild('todoList') todoList: CdkDropList;
  @ViewChild('inProgressList') inProgressList: CdkDropList;
  @ViewChild('doneList') doneList: CdkDropList;
  private statutUpdateSubscription: Subscription;

  identifiant: string;
  todoTaches: Tache[] = [];
  inProgressTaches: Tache[] = [];
  doneTaches: Tache[] = [];
  selectedTask: Tache;
  showTaskDetails: boolean = false;
  selectedTacheId: number | undefined;
  showChatbot: boolean = false;

  toggleChatbot() {
    this.showChatbot = !this.showChatbot;
  }

  constructor(
    private tacheService: TacheService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.identifiant = this.route.snapshot.paramMap.get('identifiant');
   
      this.fetchTaches();

          // Abonnez-vous aux mises à jour de statut
    this.statutUpdateSubscription = this.tacheService.getStatutUpdates().subscribe(() => {
      // Rafraîchissez les tâches après la mise à jour de statut
      this.fetchTaches();
    });
  
  }
  ngOnDestroy(): void {
    // Assurez-vous de désabonner lorsque le composant est détruit
    if (this.statutUpdateSubscription) {
      this.statutUpdateSubscription.unsubscribe();
    }
  }

  fetchTaches(): void {
    if (this.identifiant) {
      this.tacheService.getTachesUtilisateur(this.identifiant).subscribe(taches => {
        this.todoTaches = taches.filter(tache => tache.status === Tache_status.Todo);
        this.inProgressTaches = taches.filter(tache => tache.status === Tache_status.InProgress);
        this.doneTaches = taches.filter(tache => tache.status === Tache_status.Done);
      });
    }
  }
  
  drop(event: CdkDragDrop<Tache[]>, status: string) {
    const tacheToMove = event.previousContainer.data[event.previousIndex];

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      switch (status) {
        case 'inProgress':
          this.tacheService.marquerTacheInProgress(tacheToMove.id_tache).subscribe(() => {
            this.fetchTaches();
          }, error => {
            console.error('Erreur lors de la mise à jour du statut :', error);
          });
          break;
        case 'done':
          this.tacheService.marquerTacheDone(tacheToMove.id_tache).subscribe(() => {
            this.fetchTaches();
          }, error => {
            console.error('Erreur lors de la mise à jour du statut :', error);
          });
          break;
        default:
          console.error('Statut de tâche inconnu :', status);
          break;
      }
    }
  }

  showSelectedTaskDetails(selectedTask: Tache, listState: string): void {
    // // Rediriger vers le composant de détail avec la tâche sélectionnée et l'état de la liste
    // this.router.navigate(['/user/detailtache', selectedTask.id_tache], { state: { taskListState: listState } });

    this.selectedTask = selectedTask;
    this.selectedTacheId = selectedTask.id_tache;
    this.showTaskDetails = true;

    

  }
  closeTaskDetails(): void {
    this.showTaskDetails = false; // Masquer les détails de la tâche
  }
}