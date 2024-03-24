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

}
