import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback/feedback.module';
import { response } from 'express';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback: FormGroup;
feedbacks: any;
commentaire: any;
nom: any;

  constructor(private formBuilder: FormBuilder, private feedbackService: FeedbackService) { 
    this.feedback = this.formBuilder.group({
      nom: ['', Validators.required],
      commentaire: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.loadFeedbacks();
   
  }
  onSubmit(): void{
    if (this.feedback.valid) {
      const feedbackData = this.feedback.value;
        this.feedbackService.addFeedback(feedbackData).subscribe(
          (response) => {
            console.log('Feedback ajouté avec succés:', response);
            this.feedback.reset();
            this.loadFeedbacks();
          },
          (error) => {
            console.error('Erreur lors de l\'ajout du feedback:', error);
          }
        );
      
    }
  }
  loadFeedbacks(): void {
    this.feedbackService.getFedbacks()
      .subscribe(feedbacks => this.feedbacks = feedbacks);
  }

  }


