import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'app/service/evaluation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importez Router
@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  evaluationForm!: FormGroup;
  message: string = ''; // Renommez pour éviter la confusion avec 'registerFormCustom'

  constructor(private fb: FormBuilder, private evaluationService: EvaluationService, private router: Router) {}

  ngOnInit(): void {
    this.evaluationForm = this.fb.group({
      date_evaluation: ['', [Validators.required]], // Assurez-vous d'ajouter les validateurs nécessaires
      note: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.evaluationForm.valid) {
      this.evaluationService.createEvaluation(this.evaluationForm.value).subscribe({
        next: (response) => {
          console.log('Evaluation créé avec succès :', response);
          this.message = 'Évaluation créée avec succès !'; // Message de succès
          this.goToAffichage(); // Optionnel : Rediriger l'utilisateur
        },
        error: (error) => {
          console.error('Erreur lors de la création de l\'évaluation :', error);
          this.message = 'Erreur lors de la création de l\'évaluation. Veuillez réessayer.'; // Message d'erreur
        }
      });
    } else {
      this.message = 'Le formulaire n\'est pas valide. Veuillez vérifier vos entrées.'; // Validation du formulaire échouée
    }
  }
  
  goToAffichage() {
    this.router.navigate(['/AfficherEvaluation']); // Utilisez le Router pour naviguer
  }
}
