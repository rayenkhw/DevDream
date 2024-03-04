import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import { Observable } from 'rxjs';
import { Tache } from 'app/Models/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private tacheUrl: string;

  constructor(private httpClient: HttpClient) {
    this.tacheUrl=environment.baseUrl+"tache/"
   }
   
   getAllTaches(): Observable<Tache[]> {
    return this.httpClient.get<Tache[]>(this.tacheUrl+"retrieve-all-Taches");
  }
  public saveTache( tache: Tache) {
    return this.httpClient.post<Tache>(this.tacheUrl+"addtache", tache);
  }
  
 
  updateTache(id: number, value: any): Observable<Tache> {
    return this.httpClient.put<Tache>(`${this.tacheUrl}modify-tache/${id}`, value);

  }
  
  getTacheById(id: number): Observable<Tache> {
    return this.httpClient.get<Tache>(`${this.tacheUrl}retrieve-tache/${id}`);
  }
  
  deleteTache(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.tacheUrl}remove-tache/${id}`);
  }

  
  assignerTache(idEncadrant: number, idEtudiant: number, tache: Tache): Observable<Tache> {
    const url = `${this.tacheUrl}assigner-Tache-Encadrant-To-studiant?idEncadrant=${idEncadrant}&idEtudiant=${idEtudiant}`;
    return this.httpClient.post<Tache>(url, tache);
  }

  getTachesEtudiant(idEtudiant: number): Observable<Tache[]> {
    const url = `${this.tacheUrl}taches-etudiant/${idEtudiant}`;
    return this.httpClient.get<Tache[]>(url);
  }
  getTachesUtilisateur(identifiant: string): Observable<Tache[]> {
    return this.httpClient.get<Tache[]>(`${this.tacheUrl}taches-etudiantidentifiant/${identifiant}`);
  }
  assignerTacheByIdentifiant(identifiantEncadrant: String, identifiantEtudiant: String, tache: Tache): Observable<Tache> {
    const url = `${this.tacheUrl}assigner-Tache-ByIdentifiant?identifiantEncadrant=${identifiantEncadrant}&identifiantEtudiant=${identifiantEtudiant}`;
    return this.httpClient.post<Tache>(url, tache);
  }
  updateTacheStatus(id: number, status: string): Observable<any> {
    return this.httpClient.put(`${this.tacheUrl}/${id}/status`, { status });
  }

  getTachesAffectees(encadrantId: number, etudiantId: number): Observable<Tache[]> {
    return this.httpClient.get<Tache[]>(`${this.tacheUrl}affectees/${encadrantId}/${etudiantId}`);
  }
  


}


  



