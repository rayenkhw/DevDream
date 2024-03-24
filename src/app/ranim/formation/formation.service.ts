import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Formation } from './formation.module';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private apiURL ='http://localhost:9100/DevDream/formation';
  constructor(private http: HttpClient) { }
  getFormations(): Observable<any>{
    return this.http.get<Formation[]>(`${this.apiURL}/retrieve-all-formation`);
  }
  retrieveAllformation(id_formation: number): Observable<any>{
    return this.http.get<any>(`${this.apiURL}/retrieve-formation/${id_formation}`);
  }
  addFormation(formation: any): Observable<any>{
    return this.http.post(this.apiURL+'/addformation',formation);
  }
  removeFormation(id_formation: number): Observable<any>{
    return this.http.delete(`${this.apiURL}/remove-formation/${id_formation}`);
  }
  modifyFormation(id_formation: number, formation: Formation): Observable<Formation>{
    return this.http.put<Formation>(`${this.apiURL}/modify-formation/${id_formation}`, formation);
  }
  addJadoreToFormation(id_formation: number): Observable<any> {
    return this.http.post(`${this.apiURL}/${id_formation}/jadore`, null);
  }
  searchFormations(mot_cle: string): Observable<Formation[]>{
    return this.http.get<Formation[]>(`${this.apiURL}/search/${mot_cle}`);
  }
}
