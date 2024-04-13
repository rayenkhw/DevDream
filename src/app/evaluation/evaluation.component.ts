import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'app/service/evaluation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Stage } from 'app/models/stage.model';

 
@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  evaluationForm!: FormGroup;
  message: string = ''; 
  stages: any[] = [];
  selectedStage: Stage | null = null;
  quizNote: number;
  userId: number = 1;
  scores: { userId: number; score: number; total: number }[] = [];


  constructor(private fb: FormBuilder, private evaluationService: EvaluationService, private router: Router) {}
  

 
  ngOnInit(): void {
    this.evaluationForm = this.fb.group({
      date_evaluation: ['', [Validators.required]],
      note: ['', [Validators.required]],
      stageId: ['', [Validators.required]]
    });
    this.loadStages();
    this.scores = this.evaluationService.getAllScores();
    this.quizNote = parseInt(localStorage.getItem('quizScore-' + this.userId) || '0', 10);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 500); 
  
  }

  loadStages(): void {
    this.evaluationService.getAllStages().subscribe({
      next: (stages) => {
        console.log(stages);
        this.stages = stages;
      },
      error: (error) => console.error('Error fetching stages:', error)
    });
  }

  selectStage(stage: Stage): void {
    this.selectedStage = stage;
    this.evaluationForm.controls['stageId'].setValue(stage.id_stage);
  }
    
  onSubmit() {
    if (this.evaluationForm.valid) {
      const stageId = this.evaluationForm.get('stageId')?.value;
  
      if (!stageId) {
        this.message = 'Veuillez sélectionner un stage.';
        return;
      }
  
      const evaluationData = { ...this.evaluationForm.value };
      delete evaluationData.stageId; // Retirez l'ID du stage de l'objet d'évaluation
  
      this.evaluationService.addEvaluationToStage(stageId, evaluationData).subscribe({
          next: (response) => {
              this.message = 'Évaluation créée avec succès !';
              this.goToAffichage();
          },
          error: (error) => {
              console.error('Erreur :', error);
              this.message = 'Erreur lors de la création de l\'évaluation. Veuillez réessayer.';
          }
      });
  
    } else {
      this.message = 'Le formulaire n\'est pas valide. Veuillez vérifier vos entrées.';
    }
  }
  saveScore(userId: number, score: number, total: number): void {
    let scores = JSON.parse(localStorage.getItem('quizScores') || '{}');
    scores[userId] = { score, total };
    localStorage.setItem('quizScores', JSON.stringify(scores));
    this.quizNote = score; // Mise à jour de la note actuelle si nécessaire
  }
  
finishQuiz(score: number, total: number): void {
  this.evaluationService.saveScore(this.userId, score, total);
  this.quizNote = score;  // Mise à jour de la note dans le composant
}

  
  goToAffichage() {
    this.router.navigate(['/admin/AfficherEvaluation']); // Utilisez le Router pour naviguer
  }
}
