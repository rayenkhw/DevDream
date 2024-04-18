import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private apiUrl = 'http://localhost:9000/DevDream/api/User/';

  constructor(private http: HttpClient) { }

  findTopContributor(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/top-contributor`);
  }
}
