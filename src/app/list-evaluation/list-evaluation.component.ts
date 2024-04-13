import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'app/service/evaluation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evaluation } from '../models/Evaluation.model';
import {  ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-evaluation',
  templateUrl: './list-evaluation.component.html',
  styleUrls: ['./list-evaluation.component.css']
})
export class ListEvaluationComponent implements OnInit {
  existingEvaluations: Evaluation[] = [];
  selectedEvaluationId: number | null = null;
  editForm!: FormGroup;
  message: string = '';
  isSuccess: boolean = true;



  constructor(private fb: FormBuilder, private evaluationService: EvaluationService) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      date_evaluation: ['', Validators.required],
      note: ['', Validators.required]
    });
    
    this.loadExistingEvaluations();
  }

  loadExistingEvaluations() {
    this.evaluationService.getEvaluations().subscribe({
      next: (evaluations) => this.existingEvaluations = evaluations,
      error: (error) => console.error('Error fetching evaluations', error)
    });
  }

  onEditEvaluation(evaluation: Evaluation) {
    this.selectedEvaluationId = evaluation.id_evaluation;
    this.editForm.patchValue({
      date_evaluation: evaluation.date_evaluation,
      note: evaluation.note,
    });
  }
  onUpdate() {
    if (this.editForm.valid && this.selectedEvaluationId !== null) {
      const updatedEvaluation: Evaluation = {
        ...this.editForm.value,
        id_evaluation: this.selectedEvaluationId
      };
  
      this.evaluationService.updateEvaluation(updatedEvaluation).subscribe({
        next: () => {
          this.message = 'Evaluation mise à jour avec succès !';
          this.isSuccess = true;
          this.loadExistingEvaluations();
        },
        error: (error) => {
          this.message = `Erreur lors de la mise à jour de l'évaluation : ${error.error.message || 'Veuillez réessayer plus tard.'}`;
          this.isSuccess = false;
        }
      });
    } else {
      this.message = 'Veuillez remplir le formulaire correctement.';
      this.isSuccess = false;
    }
  }
  
  
  onDeleteEvaluation(evaluationId: number) {
    if (confirm('Are you sure you want to delete this evaluation?')) {
      this.evaluationService.removeEvaluation(evaluationId).subscribe({
        next: () => {
          alert('Evaluation deleted successfully');
          this.loadExistingEvaluations(); // Recharge la liste après la suppression
        },
        error: (error) => {
          console.error('Error deleting evaluation', error);
          const errorMessage = error.error && error.error.message ? error.error.message : 'Failed to delete evaluation. Please try again later.';
          alert(errorMessage);
        }
      });
    }
  }
  
}
