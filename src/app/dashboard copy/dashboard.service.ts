import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiURL = 'http://localhost:9000/DevDream';
  constructor(private http: HttpClient) { }

  getStatistics(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}/offre/stats`);
  }
  getStatisticsformation(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}/formation/statsformation`);
  }
  getStatisticsfeedback(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}/feedback/statsfeedback`);
  }
}
