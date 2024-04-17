import { Component, Inject, OnInit, Input } from '@angular/core';
import { Commentaire } from 'app/Models/commentaire';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentaireService } from 'app/Services/CommentaireService/commentaire.service';
import { UserService } from 'app/Services/UserService/user.service';
import { AuthService } from 'app/Services/UserService/auth.service';

@Component({
  selector: 'app-updatecommentaire',
  templateUrl: './updatecommentaire.component.html',
  styleUrls: ['./updatecommentaire.component.css']
})
export class UpdatecommentaireComponent implements OnInit {
  commentaireId: number;
  commentaire: Commentaire;

  formCommentaire: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { commentaireId: number, commentaire: Commentaire },
    private formBuilder: FormBuilder,
    private commentaireService: CommentaireService,
    private authService: AuthService,
  ) {
    this.commentaireId = data.commentaireId;
    this.commentaire = data.commentaire;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.formCommentaire = this.formBuilder.group({
      contenu: [this.data.commentaire.contenu, Validators.required]
    });
  }

  updateCommentaire(c: Commentaire) {
    const nouveauContenu = this.formCommentaire.get('contenu').value;
    
    // Check if the 'tache' property is defined in the 'commentaire' object and not null
    if (this.commentaire && this.commentaire.tache && this.commentaire.tache.id_tache) {
      const tacheId = this.commentaire.tache.id_tache;
      const userId: number = this.authService.getCurrentUserDetails().idUser;
  
      // Call the service to update the comment
      this.commentaireService.modifyCommentaire(tacheId, this.commentaire.id_comment, userId, nouveauContenu)
        .subscribe(
          (data) => {
            console.log("Comment updated successfully!");
            // Add any additional logic here after comment update
          },
          (error) => {
            console.error("An error occurred while updating the comment:", error);
            // Handle the error here
          }
        );
    } else {
      console.error("The 'tache' property of the 'commentaire' object is undefined or null.");
      // Handle this situation by displaying an error message or taking other necessary action.
    }
  }
}
