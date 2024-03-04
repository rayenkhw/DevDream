import { Component, Inject,OnInit,Input } from '@angular/core';
import { Commentaire } from 'app/Models/commentaire';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentaireService } from 'app/Services/CommentaireService/commentaire.service';

@Component({
  selector: 'app-updatecommentaire',
  templateUrl: './updatecommentaire.component.html',
  styleUrls: ['./updatecommentaire.component.css']
})
export class UpdatecommentaireComponent implements OnInit {
  commentaireId: number;
  commentaire: Commentaire;
  @Input()comm:any
  commentaires: Commentaire[] = []; // Liste des commentaires disponibles
  commentaireSelectionne: Commentaire | null = null; // Commentaire sélectionné pour la modification

  

  formCommentaire: FormGroup;

  @Input()
  cancelLabel = 'Cance'
  @Input()
  showCancelButton

  constructor( @Inject(MAT_DIALOG_DATA) public data: { commentaireId: number, commentaire: Commentaire }
  ,private formBuilder: FormBuilder, 
  private commentaireService: CommentaireService) { 

    this.commentaireId =  data.commentaireId;
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

  updateCommentaire(c:Commentaire){
    this.commentaireService.updateCommentaire(this.commentaire.id_comment,c).subscribe((data)=>{
      console.log("DONE !")
    })
    
    }

    
  
}
