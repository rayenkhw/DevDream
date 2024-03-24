import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competence } from './competence/competence.module';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  addOffre(offre: any) {
    throw new Error('Method not implemented.');
  }
  private apiURL = 'http://localhost:9100/DevDream/competance';

  constructor(private http: HttpClient) { }
  addCompetance(langages:string): Observable<Competence>{
    const competence: Competence = {
      langages,
      note: 0
    };
    return this.http.post<Competence>(this.apiURL+"/addcompetance", competence)
    
  }
}
