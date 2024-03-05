import { Component, OnInit, Input,Inject } from '@angular/core';
import { Tache } from 'app/Models/tache';
import { TacheService } from 'app/Services/TacheService/tache.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Commentaire } from 'app/Models/commentaire';
import { CommentaireService } from 'app/Services/CommentaireService/commentaire.service';
import { UserService } from 'app/Services/UserService/user.service';
import { User } from 'app/Models/user';
import { Observable } from 'rxjs';
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
  selectedTache: Tache;
  formCommentaire: FormGroup;
  user: User;
  fileNameDialogRefup: MatDialogRef<UpdatecommentaireComponent>;
 

  constructor(private dialog: MatDialog,private tacheService: TacheService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private commentaireService: CommentaireService,
              @Inject(DOCUMENT) private doc: Document) {
    this.initializeFormCommentaire();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedTacheId = +params['id'];
      this.fetchSelectedTacheDetails();
    });
  }

  fetchSelectedTacheDetails(): void {
    this.tacheService.getTacheById(this.selectedTacheId).subscribe(task => {
      this.selectedTache = task;
      this.commentaireService.getCommentsWithUsersByTacheId(task.id_tache).subscribe(comments => {
        console.log(comments);
        this.selectedTache.commentaireList = comments.map(comment => {
          // Extrayez le nom d'utilisateur de chaque objet de commentaire
          const user = comment.find(obj => obj.hasOwnProperty('nom')); // Assurez-vous que 'nom' est la clé contenant le nom d'utilisateur
          // Retournez un nouvel objet de commentaire avec le nom d'utilisateur ajouté
          return {
            ...comment[0], // Supposons que le premier objet dans le tableau comment contient les détails du commentaire
            username: user ? user['nom'] : 'Utilisateur inconnu' // Si aucun nom d'utilisateur n'est trouvé, affichez "Utilisateur inconnu"
          };
        });
      });
    });
  }
  
  deleteCommentaire(id_comment: number): void {
    this.commentaireService.deleteCommentaire(id_comment).subscribe(
      () => {
        console.log('Commentaire supprimé avec succès:', id_comment);
        this.fetchSelectedTacheDetails(); // Rafraîchir la liste des commentaires après la suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression du commentaire:', error);
      }
    );
  }

  confirmBox(id_comment: any, nom: any): void {
    Swal.fire({
      title: 'Confirmation',
      text: `Êtes-vous sûr de vouloir supprimer ce commentaire ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
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
    if (this.formCommentaire.invalid || !this.selectedTache) {
      console.error('Le formulaire est invalide ou la tâche sélectionnée est manquante.');
      return;
    }
  
    const contenu = this.formCommentaire.get('contenu').value;
    const tacheId = this.selectedTache.id_tache;
    const userId: number = this.userService.currentUser.idUser; 
    const username = this.userService.currentUser.nom;
  
    this.commentaireService.ajouterCommentaire(tacheId, contenu, userId).subscribe(
      (commentaire) => {
        console.log('Commentaire ajouté avec succès !', commentaire);
  
        // Créer un nouvel objet avec le commentaire et le nom d'utilisateur
        const commentaireAvecUsername = {
          ...commentaire,
          username: username // Ajouter le nom d'utilisateur à l'objet
        };
  
        // Ajouter le commentaire à la liste des commentaires de la tâche sélectionnée
        this.selectedTache.commentaireList.push(commentaireAvecUsername);
  
        // Réinitialiser le formulaire sans récupérer à nouveau les commentaires
        this.initializeFormCommentaire();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du commentaire :', error);
      }
    );
  }
  openup(commentaire: Commentaire) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "25%";
    dialogConfig.data = {
      commentaireId: commentaire.id_comment,
      commentaire: commentaire
    };
    this.fileNameDialogRefup = this.dialog.open(UpdatecommentaireComponent, dialogConfig);
  }
  
  

  showUpdateForm(f: any) {
    this.commBinding = f;
    this.showUpdate = true;
  }
  confirmDialog(id_comment: any) {
    if (confirm(`Are you sure you want to do this?`)) {
        this.commentaireService.deleteCommentaire(id_comment).subscribe((d) => {
            this.fetchSelectedTacheDetails();
            console.log("done");
        });
    }
}
hideUpdateForm() {
  this.showUpdate = false;
}
// updateCommentaire(commentaire: Commentaire) {
//   if (commentaire && commentaire.id_comment) {
//     this.commentaireService.updateCommentaire(commentaire.id_comment, commentaire).subscribe(
//       () => {
//         console.log('Commentaire mis à jour avec succès');
//         // Appel à la méthode handleCommentaireModification() pour recharger les détails de la tâche après la mise à jour du commentaire
//         this.handleCommentaireModification();
//       },
//       (error) => {
//         console.error('Erreur lors de la mise à jour du commentaire:', error);
//         Swal.fire('Error', 'Erreur lors de la mise à jour du commentaire', 'error');
//       }
//     );
//   } else {
//     console.error('Comment or its ID is undefined');
//   }
// }

// Méthode pour recharger les détails de la tâche après la modification d'un commentaire
handleCommentaireModification(): void {
  // Rechargez les détails de la tâche pour obtenir les données mises à jour
  this.fetchSelectedTacheDetails();
}
updateCommentaire(commentaire: Commentaire) {
  // Vérifier si le commentaire et son ID sont définis
  if (commentaire && commentaire.id_comment) {
    // Récupérer le contenu du commentaire depuis l'entrée utilisateur
    const nouveauContenu =  this.formCommentaire.get('contenu').value;

    // Récupérer l'identifiant de la tâche associée au commentaire
    const tacheId = commentaire.tache.id_tache;

    // Récupérer l'identifiant de l'utilisateur actuel
    const userId: number = this.userService.currentUser.idUser;

    // Appeler le service pour mettre à jour le commentaire
    this.commentaireService.modifyCommentaire(commentaire.id_comment, nouveauContenu, tacheId, userId).subscribe(
      () => {
        console.log('Commentaire mis à jour avec succès');
        // Appel à la méthode handleCommentaireModification() pour recharger les détails de la tâche après la mise à jour du commentaire
        this.handleCommentaireModification();
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du commentaire:', error);
        Swal.fire('Error', 'Erreur lors de la mise à jour du commentaire', 'error');
      }
    );
  } else {
    console.error('Commentaire ou son ID non défini');
  }
}

  
  
  }
  

