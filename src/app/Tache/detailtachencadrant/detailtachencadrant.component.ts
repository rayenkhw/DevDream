import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatecommentaireComponent } from 'app/Commentaire/UpdateCommentaire/updatecommentaire.component';
import { Commentaire } from 'app/Models/commentaire';
import { Tache } from 'app/Models/tache';
import { AuthenticationResponse, User } from 'app/Models/user';
import { CommentaireService } from 'app/Services/CommentaireService/commentaire.service';
import { TacheService } from 'app/Services/TacheService/tache.service';
import { AuthService } from 'app/Services/UserService/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailtachencadrant',
  templateUrl: './detailtachencadrant.component.html',
  styleUrls: ['./detailtachencadrant.component.css']
})
export class DetailtachencadrantComponent implements OnInit {
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

  tache: Tache;
  etudiant: User;
 // taches: Tache[] = [];
  constructor(private dialog: MatDialog,
    private tacheService: TacheService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private commentaireService: CommentaireService,
    @Inject(DOCUMENT) private doc: Document) {
    //this.initializeFormCommentaire();
    this.tache = new Tache();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idParam = params['id_tache'];
      if (idParam) {
        this.selectedTacheId = Number(idParam);
        this.loadSelectedTache();
        
      } else {
        console.error('Invalid task ID provided:', idParam);
      }
    });

    this.authService.getCurrentUser().subscribe(
      (user: AuthenticationResponse) => {
        this.user = user;
      },
      (error) => {
        console.error('Error fetching current user:', error);
      }
    );
    this.initializeFormCommentaire();
  }
  controlErrorState(): boolean {
    const control = this.formCommentaire.get('contenu');
    return control.invalid && control.touched;
  }
  

  loadSelectedTache(): void {
    if (this.selectedTacheId) {
      this.tacheService.getTacheById(this.selectedTacheId).subscribe(
        (tache: Tache) => {
          this.selectedTache = tache;
          //this.getEncadrantIdentifiant();
          this.loadCommentsForTache(tache.id_tache);
        },
        (error) => {
          console.error('Error fetching selected Tache:', error);
        }
      );
    } else {
      console.error('Invalid Tache ID provided:', this.selectedTacheId);
    }
  }

  loadCommentsForTache(idTache: number): void {
    this.commentaireService.getCommentsWithUsersByTacheId(idTache).subscribe(
      (comments: Commentaire[]) => {
        this.commentaires = comments;
      },
      (error) => {
        console.error('Error fetching comments for Tache:', error);
      }
    );
  }
  getEncadrantIdentifiant(): void {
    if (this.selectedTache && this.selectedTache.etudiant && this.selectedTache.etudiant.identifiant) {
      this.tacheService.getEncadrantIdentifiantForEtudiant(this.selectedTache.etudiant.identifiant)
        .subscribe(
          (etudiantIdentifiant: string) => {
            //this.fetchSelectedTacheDetails(etudiantIdentifiant);
          },
          (error) => {
            console.error('Error fetching encadrant identifiant:', error);
          }
        );
    } else {
      console.error('Selected task or student ID is missing.');
    }
  }


  deleteCommentaire(id_comment: number): void {
    if (this.selectedTache && this.selectedTache.encadrant && this.selectedTache.encadrant.identifiant) {
      const encadrantIdentifiant = this.user.identifiant;
      this.commentaireService.deleteCommentaire(id_comment).subscribe(
        () => {
          console.log('Comment deleted successfully:', id_comment);
          this.loadCommentsForTache(this.selectedTache.id_tache);
          //this.fetchSelectedTacheDetails(encadrantIdentifiant);
        },
        (error) => {
          console.error('Error deleting comment:', error);
        }
      );
    } else {
      console.error('Selected task or student ID is missing or not a string.');
    }
  }
  getCurrentDate(): Date {
    return new Date(); // Retourne la date actuelle au moment de l'appel de la fonction
  }
  getUserName(commentaire: Commentaire): string {
    if (commentaire && commentaire.tache) {
      if (commentaire.tache.etudiant) {
        return commentaire.tache.etudiant.nom; // Si l'étudiant est défini, utilisez son nom d'utilisateur
      } else if (commentaire.tache.encadrant) {
        return commentaire.tache.encadrant.nom; // Sinon, si l'encadrant est défini, utilisez son nom d'utilisateur
      }
    }
    return 'Utilisateur inconnu'; // Si aucune information sur l'utilisateur n'est disponible, retournez une valeur par défaut
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

  getPriorityLabel(priority: number): string {
    if (priority >= 80) {
      return 'High';
    } else if (priority >= 50 && priority < 80) {
      return 'Medium';
    } else {
      return 'Low';
    }
  }
  
  initializeForm(): void {
    this.formCommentaire = this.formBuilder.group({
      priorite: [this.tache.priorite, [Validators.required, Validators.min(0)]],
      description: [this.tache.description, Validators.required],
      status: [this.tache.status, Validators.required],
      delai: [this.tache.delai, Validators.required],
      performance: [this.tache.performance, Validators.required],
      remarque: [this.tache.remarque, Validators.required],
      identifiantEtudiant: [this.tache.etudiant.identifiant, Validators.required]
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
            const dateCreation = this.getCurrentDate(); 
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