import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reponse } from './reponse.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReponseService {
  private apiURL = 'http://localhost:9100/DevDream/reponse'
  constructor(private http: HttpClient) { }
  
  getReponses(): Observable<Reponse[]> {
    return this.http.get<Reponse[]>("http://localhost:9100/DevDream/reponse/retrieve-all-reponses");
  }
  // addReponse(reponse: Reponse): Observable<Reponse> {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.post<Reponse>(`${this.apiURL}/add-reponse`, reponse, { headers });
  // }
  
 addReponse(reponse: Reponse,id_Reclamation): Observable<Reponse> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.post<Reponse>(`${this.apiURL}/addReponseaffectReclamationsendNotification/ ${id_Reclamation}`,reponse, { headers });
  }
 }
