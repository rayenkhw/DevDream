import { Component, OnInit, NgZone } from '@angular/core';
import { EvaluationService } from 'app/service/evaluation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Stage } from '.././Models/stage';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  droppedStages: Stage[] = [];
  additionalStages: any[] = [];

  constructor(
    private fb: FormBuilder,
    private evaluationService: EvaluationService,
    private router: Router,
    private zone: NgZone  // Inject NgZone here
  ) {}

  ngOnInit(): void {
    this.loadStagesFromStorage();  // Assurez-vous que ceci est la première chose exécutée
    this.evaluationForm = this.fb.group({
      date_evaluation: ['', [Validators.required]],
      note: ['', [Validators.required]],
      stageId: ['', [Validators.required]]
    });
    this.scores = this.evaluationService.getAllScores();
    this.quizNote = parseInt(localStorage.getItem('quizScore-' + this.userId) || '0', 10);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 500);
  }
  

  dragStart(event: DragEvent, stage: any) {
    if (!event) {
      console.error('Drag event is not passed correctly.');
      return;
    }
    event.dataTransfer?.setData("text", JSON.stringify(stage));
  }
  
  dragEnd() {
    console.log('Drag operation ended');
  }
  
allowDrop(event: DragEvent) {
  event.preventDefault();
}

  
onStageDrop(event: DragEvent) {
  event.preventDefault();
  if (!event.dataTransfer) {
    console.error('No dataTransfer available in the drop event.');
    return;
  }
  const data = event.dataTransfer.getData("text");
  if (!data) {
    console.error('No data received on drop');
    return;
  }
  try {
    const droppedStage = JSON.parse(data);
    this.additionalStages.push(droppedStage);
    this.stages = this.stages.filter(stage => stage.id_stage !== droppedStage.id_stage);
    this.saveStages();  // Sauvegarder les modifications
  } catch (error) {
    console.error('Error parsing stage data:', error);
  }
}

saveStages() {
  const stagesData = JSON.stringify(this.stages);
  const additionalStagesData = JSON.stringify(this.additionalStages);
  localStorage.setItem('stages', stagesData);
  localStorage.setItem('additionalStages', additionalStagesData);
  console.log('Stages saved:', this.stages);
  console.log('Additional Stages saved:', this.additionalStages);
}

loadStagesFromStorage() {
  const stagesData = localStorage.getItem('stages');
  const additionalStagesData = localStorage.getItem('additionalStages');

  if (stagesData) {
    this.stages = JSON.parse(stagesData);
  } else {
    this.loadStages();  // Appeler uniquement si les données ne sont pas en localStorage
  }

  this.additionalStages = additionalStagesData ? JSON.parse(additionalStagesData) : [];
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
      delete evaluationData.stageId; // Remove stage ID from evaluation object
      this.evaluationService.addEvaluationToStage(stageId, evaluationData).subscribe({
        next: (response) => {
          this.message = 'Évaluation créée avec succès !';
          this.goToAffichage();
        },
        error: (error) => {
          console.error('Erreur lors de la création de l\'évaluation:', error);
          this.message = 'Erreur lors de la création de l\'évaluation. Veuillez réessayer.';
        }
      });
    } else {
      this.message = 'Le formulaire n\'est pas valide. Veuillez vérifier vos entrées.';
    }
  }

  goToAffichage() {
    this.router.navigate(['/admin/AfficherEvaluation']); // Navigate using the Router
  }
}