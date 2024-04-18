import { Component, OnInit, Input, Inject ,Output, EventEmitter} from '@angular/core';
import { Tache } from 'app/Models/tache';
import { TacheService } from 'app/Services/TacheService/tache.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Commentaire } from 'app/Models/commentaire';
import { CommentaireService } from 'app/Services/CommentaireService/commentaire.service';
import { UserService } from 'app/Services/UserService/user.service';
import { AuthenticationResponse } from 'app/Models/user';
import { AuthService } from 'app/Services/UserService/auth.service';
import { DOCUMENT } from '@angular/common';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UpdatecommentaireComponent } from 'app/Commentaire/UpdateCommentaire/updatecommentaire.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-detail-tache',
  templateUrl: './detail-tache.component.html',
  styleUrls: ['./detail-tache.component.css']
})
export class DetailTacheComponent implements OnInit {
  commentaires: Commentaire[] = [];
  totalElements: any;
  commBinding: any;
  result: boolean;
  showUpdate = false;
  dataSource = new MatTableDataSource<Commentaire>();

  @Input() selectedTacheId: number;
  @Input() selectedTache: Tache;
  formCommentaire: FormGroup;
  user: AuthenticationResponse;
  fileNameDialogRefup: MatDialogRef<UpdatecommentaireComponent>;
  @Output() close = new EventEmitter<void>();

  constructor(private dialog: MatDialog,
              private tacheService: TacheService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private commentaireService: CommentaireService,
              @Inject(DOCUMENT) private doc: Document) {
    this.initializeFormCommentaire();
  }

  ngOnInit(): void {
    if (!isNaN(this.selectedTacheId)) {
      // Fetch task details only if selectedTacheId is valid
      this.authService.getCurrentUser().subscribe(
        (user: AuthenticationResponse) => {
          this.user = user;
          if (user) {
            this.getEncadrantIdentifiant();
          } else {
            console.error('Current user not found.');
          }
        },
        (error) => {
          console.error('Error fetching current user:', error);
        }
      );
    } else {
      console.error('Invalid task ID provided:', this.selectedTacheId);
    }
    
  }
  getEncadrantIdentifiant(): void {
    if (this.selectedTache && this.selectedTache.etudiant.identifiant) {
      this.tacheService.getEncadrantIdentifiantForEtudiant(this.selectedTache.etudiant.identifiant)
        .subscribe(
          (encadrantIdentifiant: string) => {
            this.fetchSelectedTacheDetails(encadrantIdentifiant);
          },
          (error) => {
            console.error('Error fetching encadrant identifiant:', error);
          }
        );
    } else {
      console.error('Selected task or student ID is missing.');
    }
  }
  
  fetchSelectedTacheDetails(encadrantIdentifiant: string): void {
    const etudiantIdentifiant = this.user.identifiant;
    this.tacheService.getTacheDetailsByIdAndEncadrantAndEtudiant(this.selectedTacheId, encadrantIdentifiant, etudiantIdentifiant)
      .subscribe(
        (task: Tache) => {
          if (task) {
            this.selectedTache = task;
            this.commentaireService.getCommentsWithUsersByTacheId(task.id_tache)
              .subscribe(
                (comments: Commentaire[]) => {
                  this.commentaires = comments.map(comment => {
                    const user1 = comment.tache && comment.tache.etudiant ? comment.tache.etudiant.nom : 'Unknown User';
                    const user2 = comment.tache && comment.tache.encadrant ? comment.tache.encadrant.nom : 'Unknown User';
                    return {
                      ...comment,
                      username1: user1,
                      username2: user2,
                      tache: task
                    };
                  });
                },
                (error) => {
                  console.error('Error fetching comments:', error);
                }
              );
          } else {
            console.error('No task found with ID:', this.selectedTacheId);
          }
        },
        (error) => {
          console.error('Error fetching task details:', error);
        }
      );
  }
  
  

  deleteCommentaire(id_comment: number): void {
    if (this.selectedTache && this.selectedTache.etudiant && this.selectedTache.etudiant.identifiant) {
      // Pass the encadrantIdentifiant argument to fetchSelectedTacheDetails
      const encadrantIdentifiant = this.user.identifiant;
      this.commentaireService.deleteCommentaire(id_comment).subscribe(
        () => {
          console.log('Comment deleted successfully:', id_comment);
          this.fetchSelectedTacheDetails(encadrantIdentifiant); // Pass encadrantIdentifiant here
        },
        (error) => {
          console.error('Error deleting comment:', error);
        }
      );
    } else {
      console.error('Selected task or student ID is missing or not a string.');
    }
  }
  

  confirmBox(id_comment: any, nom: any): void {
    Swal.fire({
      title: 'Confirmation',
      text: `Are you sure you want to delete this comment?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteCommentaire(id_comment);
      }
    });
  }

  refresh(): void {
    this.doc.defaultView.location.reload();
  }

  initializeFormCommentaire(): void {
    this.formCommentaire = this.formBuilder.group({
      contenu: ['', [Validators.required]]
    });
  }

  ajouterCommentaire(): void {
    if (this.formCommentaire.invalid || !this.selectedTache ) {
      console.error('Form is invalid or selected task is missing.');
      return;
    }
  
    if (this.authService.isAuthenticated()) {
      this.authService.getCurrentUser().subscribe(
        (currentUser: AuthenticationResponse) => {
          if (currentUser && currentUser.idUser && currentUser.nom) {
            const userId: number = currentUser.idUser;
            const username = currentUser.nom;
  
            const contenu = this.formCommentaire.get('contenu').value;
            const tacheId = this.selectedTache.id_tache;
  
            this.commentaireService.ajouterCommentaire(tacheId, contenu, userId).subscribe(
              (commentaire) => {
                console.log('Comment added successfully!', commentaire);
  
                const commentaireAvecUsername = {
                  ...commentaire,
                  username: username
                };
  
                this.selectedTache.commentaireList.push(commentaireAvecUsername);
                this.initializeFormCommentaire();
              },
              (error) => {
                console.error('Error adding comment:', error);
              }
            );
          } else {
            console.error('Current user details are not available.');
          }
        },
        (error) => {
          console.error('Error fetching current user:', error);
        }
      );
    } else {
      console.error('User is not authenticated.');
    }
  }
  

  openup(commentaire: Commentaire) {
    console.log('Selected commentaire:', commentaire);
    if (commentaire && commentaire.tache) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.width = "25%";
      dialogConfig.data = {
        commentaireId: commentaire.id_comment,
        commentaire: commentaire,
        tache: commentaire.tache
      };
      this.fileNameDialogRefup = this.dialog.open(UpdatecommentaireComponent, dialogConfig);
    } else {
      console.error('The "tache" property of "commentaire" object is undefined.');
    }
  }

  closeTaskDetails() {
    this.close.emit();
  }
}
