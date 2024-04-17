import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluation } from 'app/Models/Evaluation.model';
import {Stage} from 'app/Models/stage';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private evaluationBaseUrl = 'http://localhost:9000/DevDream/api/evaluation'; 

  private _quizNote: number = 0;
  private dragData: any;

  constructor(private http: HttpClient) { }

  addEvaluationToStage(idStage: number, evaluation: Evaluation): Observable<Evaluation> {
    const url = `http://localhost:9000/DevDream/api/evaluation/${idStage}/add`;
    return this.http.post<Evaluation>(url, evaluation);
  }
  

  getEvaluations(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(`${this.evaluationBaseUrl}/allEvaluations`);
  }
  getAllStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>('http://localhost:9000/DevDream/api/stage/retrieve-all-stages');
  }


  updateEvaluation(evaluation: Evaluation): Observable<Evaluation> {
    return this.http.put<Evaluation>(`${this.evaluationBaseUrl}/updateEvaluation`, evaluation);
  }

  removeEvaluation(evaluationId: number): Observable<void> {
    return this.http.delete<void>(`${this.evaluationBaseUrl}/evaluation/${evaluationId}`);
  }
 
  getAllScores(): { userId: number; score: number; total: number }[] {
    let scores = JSON.parse(localStorage.getItem('quizScores') || '{}');
    return Object.keys(scores).map(userId => ({
      userId: parseInt(userId, 10),
      score: scores[userId].score,
      total: scores[userId].total
    }));
  }
  saveScore(userId: number, score: number, total: number): void {
    let scores = JSON.parse(localStorage.getItem('quizScores') || '{}');
    scores[userId] = { score, total };
    localStorage.setItem('quizScores', JSON.stringify(scores));
  }
  setData(data: any) {
    this.dragData = data;
  }

  getData(): any {
    return this.dragData;
  }

  clearData() {
    this.dragData = null;
  }


  
}
