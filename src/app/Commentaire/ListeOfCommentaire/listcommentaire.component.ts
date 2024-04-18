import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Commentaire } from 'app/Models/commentaire';
import { DOCUMENT } from '@angular/common';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddcommentaireComponent } from '../AddCommentaire/addcommentaire.component';
import { CommentaireService } from 'app/Services/CommentaireService/commentaire.service';
import { formatDate } from "@angular/common";
import { UpdatecommentaireComponent } from '../UpdateCommentaire/updatecommentaire.component';


@Component({
  selector: 'app-listcommentaire',
  templateUrl: './listcommentaire.component.html',
  styleUrls: ['./listcommentaire.component.css']
})
export class ListcommentaireComponent implements OnInit {
  commentaires: Commentaire[] = [];
  totalElements: any;
  commBinding: any;
  result: boolean;
  showUpdate = false;
  dataSource = new MatTableDataSource<Commentaire>();
  fileNameDialogRef: MatDialogRef<AddcommentaireComponent>;
  fileNameDialogRefup: MatDialogRef<UpdatecommentaireComponent>;

  currentDate = new Date();
  cValue = formatDate(this.currentDate, 'dd-MM-yyyy', 'en-US');

  constructor(private dialog: MatDialog, private commentaireService: CommentaireService, @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit(): void {
    this.ListOfCommentaire();
  }

  /***************************************Liste Des Reclamations***************************************/
  ListOfCommentaire() {
    const request = {};
    this.commentaireService.getAllCommentaires(request).subscribe(
      (data) => {
        this.commentaires = data;
        console.log('Commentaires:', this.commentaires);
      },
      (error) => {
        console.error('Erreur lors du chargement des commentaires:', error);
      }
    );
  }

  refresh(): void {
    this.doc.defaultView.location.reload();
  }

  Supprimer(id_comment: number) {
    this.commentaireService.deleteCommentaire(id_comment).subscribe(
      () => {
        console.log('Commentaire supprimé avec succès:', id_comment);
        // Mettre à jour la liste des commentaires après la suppression
        this.ListOfCommentaire();
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
        this.Supprimer(id_comment);
      }
    });
  }

  open() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "25%";
    this.fileNameDialogRef = this.dialog.open(AddcommentaireComponent, dialogConfig);
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
            this.ListOfCommentaire();
            console.log("done");
        });
    }
}
hideUpdateForm() {
  this.showUpdate = false;
}

updateCommentaire(commentaire: Commentaire) {
  if (commentaire && commentaire.id_comment) {
    this.commentaireService.updateCommentaire(commentaire.id_comment, commentaire).subscribe(
      () => {
        console.log('Commentaire mis à jour avec succès:', commentaire.id_comment);
        this.ListOfCommentaire();
        this.hideUpdateForm();
        Swal.fire('Success', 'Commentaire mis à jour avec succès', 'success');
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du commentaire:', error);
        Swal.fire('Error', 'Erreur lors de la mise à jour du commentaire', 'error');
      }
    );
  } else {
    console.error('Comment or its ID is undefined');
  }
}


}
