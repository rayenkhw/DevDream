import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache, Tache_status } from 'app/Models/tache'; // Assuming Tache_status is imported from your models
import { DOCUMENT } from '@angular/common';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TacheService } from 'app/Services/TacheService/tache.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  identifiant: string;
  todoTaches: Tache[] = [];
  inProgressTaches: Tache[] = [];
  doneTaches: Tache[] = [];
  selectedTask: Tache;

  constructor(
    private tacheService: TacheService,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private doc: Document,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.identifiant = this.route.snapshot.paramMap.get('identifiant');
    this.fetchTaches();
  }

  refresh(): void {
    this.doc.defaultView.location.reload();
  }

  fetchTaches(): void {
    if (this.identifiant) {
      this.tacheService.getTachesUtilisateur(this.identifiant).subscribe(taches => {
        // Clear previous data
        this.todoTaches = [];
        this.inProgressTaches = [];
        this.doneTaches = [];

        // Categorize taches based on status
        taches.forEach(tache => {
          switch (tache.status) {
            case Tache_status.Done:
              this.doneTaches.push(tache);
              break;
            case Tache_status.InProgress:
              this.inProgressTaches.push(tache);
              break;
            case Tache_status.Todo:
              this.todoTaches.push(tache);
              break;
            default:
              // Handle unexpected status
              break;
          }
        });
      });
    }
  }

  drop(event: CdkDragDrop<string[]>, status: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.getStatusArray(status), event.previousIndex, event.currentIndex);
    } else {
      // Handle status change here
      console.log('Task status changed from ' + event.previousContainer.id + ' to ' + status);
    }
  }

  private getStatusArray(status: string): Tache[] {
    switch (status) {
      case 'todo':
        return this.todoTaches;
      case 'inProgress':
        return this.inProgressTaches;
      case 'done':
        return this.doneTaches;
      default:
        return [];
    }
  }
 

  showSelectedTaskDetails(selectedTask: Tache, listState: string): void {
    // Rediriger vers le composant de détail avec la tâche sélectionnée et l'état de la liste
    this.router.navigate(['/user/detailtache', selectedTask.id_tache], { state: { taskListState: listState } });
  }
 
}
