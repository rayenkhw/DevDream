import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback/feedback.module';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback: FormGroup;
  feedbacks: Feedback[] = []; // Initialisation de feedbacks comme un tableau vide

  rating: number = 0;

  constructor(private formBuilder: FormBuilder, private feedbackService: FeedbackService) { 
    this.feedback = this.formBuilder.group({
      nom: ['', Validators.required],
      commentaire: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadFeedback();
  }

  onSubmit(): void {
    if (this.feedback.valid) {
      const feedbackData = this.feedback.value;
      feedbackData.rating = this.rating;
      this.feedbackService.addFeedback(feedbackData).subscribe(
        (response) => {
          console.log('Feedback ajouté avec succès:', response);
          this.feedback.reset();
          this.loadFeedback();
          this.rating = 0;
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du feedback:', error);
          // Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
        }
      );
    }
  }

  loadFeedback(): void {
    this.feedbackService.getFedbacks().subscribe(
      (feedbacks) => {
        this.feedbacks = feedbacks; // Mettre à jour la liste des feedbacks
      },
      (error) => {
        console.error('Erreur lors du chargement des feedbacks:', error);
        // Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
      }
    );
  }

  updateRating(rating: number): void {
    this.rating = rating;
  }

  resetForm(): void {
    this.feedback.reset();
    this.rating = 0;
  }
}
