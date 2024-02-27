import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';
import { Evaluation } from 'app/models/Evaluation.model';
@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private http:HttpClient) { }



  private baseUrl = 'http://localhost:9000/DevDream/api/evaluation';


createEvaluation(evaluation: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/addEvaluation`, evaluation);
}

getEvaluations(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/allEvaluations`);
}

// Dans EvaluationService
updateEvaluation(evaluation: Evaluation): Observable<any> {
  return this.http.put(`${this.baseUrl}/updateEvaluation`, evaluation);
}

removeEvaluation(evaluationId: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/evaluation/${evaluationId}`);
}
}
