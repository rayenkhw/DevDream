import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from './reclamation.module';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  // update(Id_Reclamation: number, currentReclamation: Reclamation) {
  //   throw new Error('Method not implemented.');
  // }
  // get(Id_Reclamation: number) {
  //   throw new Error('Method not implemented.');
  // }
  
  private apiURL = 'http://localhost:9000/DevDream/reclamation';

  constructor(private http: HttpClient) { }

  getReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>("http://localhost:9000/DevDream/reclamation/retrieve-all-reclamations");
  }

  retrieveReclamation(id_Reclamation: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/retrieve-reclamation/${id_Reclamation}`);
  }

  addReclamation(reclamation: Reclamation): Observable<Reclamation> {

    return this.http.post<Reclamation>("http://localhost:9000/DevDream/reclamation/add-reclamation", reclamation);
  }

  removeReclamation(id_Reclamation: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/remove-reclamation/${id_Reclamation}`);
  }

  
  modifyOffre(id_Reclamation: number, reclamations: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${this.apiURL}/modify-reclamation/${id_Reclamation}`, reclamations);
  }
  
  }