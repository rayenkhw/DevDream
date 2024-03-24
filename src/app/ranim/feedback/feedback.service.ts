import { Injectable } from '@angular/core';
import { Feedback } from './feedback/feedback.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiURL = 'http://localhost:9100/DevDream/feedback';
  constructor(private http: HttpClient) { }
  addFeedback(feedbackData: Feedback): Observable<any>{
    return this.http.post<any>(this.apiURL+"/add-feedback", feedbackData);
  }
  getFedbacks(): Observable<any> {
    return this.http.get<Feedback[]>(`${this.apiURL}/retrieve-all-feedback`);
  }

  retrieveFeedback(id_feedback: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/retrieve-feedback/${id_feedback}`);
  }
}
