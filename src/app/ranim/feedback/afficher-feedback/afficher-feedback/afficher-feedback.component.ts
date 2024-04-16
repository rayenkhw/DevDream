import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../feedback.service';
import { Feedback } from '../../feedback/feedback.module';

@Component({
  selector: 'app-afficher-feedback',
  templateUrl: './afficher-feedback.component.html',
  styleUrls: ['./afficher-feedback.component.css']
})
export class AfficherFeedbackComponent implements OnInit {
  feedbacks: Feedback[];
  

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.loadFeedbacks();
  }
  loadFeedbacks(): void {
    this.feedbackService.getFedbacks()
      .subscribe(feedbacks => this.feedbacks = feedbacks);
  }
  updateRating(feedbackId: number, rating: number): void {
    this.feedbackService.updateFeedbackRating(feedbackId, rating)
      .subscribe(updatedFeedback => {
        // Mettre à jour le feedback dans la liste feedbacks
        const index = this.feedbacks.findIndex(feedback => feedback.id === feedbackId);
        if (index !== -1) {
          this.feedbacks[index] = updatedFeedback;
        }
      });
  }
  
}
