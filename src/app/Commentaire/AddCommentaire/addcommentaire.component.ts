import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Commentaire } from 'app/Models/commentaire';
import { CommentaireService } from 'app/Services/CommentaireService/commentaire.service';

@Component({
  selector: 'app-addcommentaire',
  templateUrl: './addcommentaire.component.html',
  styleUrls: ['./addcommentaire.component.css']
})
export class AddcommentaireComponent implements OnInit {
  formCommentaire: FormGroup;

  @Input()
  cancelLabel = 'Cance'
  @Input()
  showCancelButton

  constructor(private formBuilder: FormBuilder, private commentaireService: CommentaireService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.formCommentaire = this.formBuilder.group({
      contenu: ['', [Validators.required]]
    });
  }

  ajouterCommentaire(): void {
    if (this.formCommentaire.invalid) {
      return;
    }

    const contenu = this.formCommentaire.get('contenu').value;
    const nouveauCommentaire: Commentaire = {
      id_comment: null,
      contenu: contenu,
      tache: null
    };

    this.commentaireService.saveCommentaire(nouveauCommentaire).subscribe(
      (data) => {
        console.log('Commentaire ajouté avec succès !', data);
        // Réinitialiser le formulaire après l'ajout réussi
        this.formCommentaire.reset();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du commentaire :', error);
      }
    );
  }
}
