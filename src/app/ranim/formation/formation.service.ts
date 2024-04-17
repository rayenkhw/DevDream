import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Formation } from './formation.module';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  updateFormation(formation: Formation) {
    throw new Error('Method not implemented.');
  }
  private apiURL ='http://localhost:9000/DevDream/formation';
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
 
  addJadoreToFormation(id_formation: number): Observable<any> {
    return this.http.post(`${this.apiURL}/${id_formation}/jadore`, null);
  }
  searchFormations(mot_cle: string): Observable<Formation[]>{
    return this.http.get<Formation[]>(`${this.apiURL}/search/${mot_cle}`);
  }
  modifyFormation(id_formation: number, formation: Formation): Observable<any> {
    const url = `${this.apiURL}/modify-formation/${id_formation}`; // Remplacez 'id_formation' par le nom de votre propriété identifiant
    return this.http.put(url, formation);
  }

}
