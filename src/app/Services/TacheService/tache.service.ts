import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import { Observable,Subject,of } from 'rxjs';
import { Tache } from 'app/Models/tache';
import { tap ,catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TacheService {
   // Déclarer un sujet observable pour émettre les mises à jour de statut
   private statutUpdateSubject: Subject<void> = new Subject<void>();
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
  
  marquerTacheInProgress(tacheId: number): Observable<any> {
    return this.httpClient.put<any>(`${this.tacheUrl}marquer-in-progress/${tacheId}`, {}).pipe(
      tap(() => this.statutUpdateSubject.next())
    );
  }

  marquerTacheDone(tacheId: number): Observable<any> {
    return this.httpClient.put<any>(`${this.tacheUrl}marquer-done/${tacheId}`, {}).pipe(
      tap(() => this.statutUpdateSubject.next())
    );
  }
    // Méthode pour s'abonner aux mises à jour de statut
    getStatutUpdates(): Observable<void> {
      return this.statutUpdateSubject.asObservable();
    }

  getTachesTodoCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.tacheUrl}todo/count`);
  }

  getTachesInProgressCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.tacheUrl}in-progress/count`);
  }

  getTachesDoneCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.tacheUrl}done/count`);
  }


  getTacheDetailsByIdAndEncadrantAndEtudiant(idTache: number, encadrantIdentifiant: string, etudiantIdentifiant: string): Observable<any> {
    const url = `${this.tacheUrl}taches/${idTache}?encadrantIdentifiant=${encadrantIdentifiant}&etudiantIdentifiant=${etudiantIdentifiant}`;
    return this.httpClient.get<any>(url)
      .pipe(
        catchError(this.handleError<any>('getTacheDetailsByIdAndEncadrantAndEtudiant'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Pour que l'application continue de fonctionner, vous pouvez renvoyer un résultat vide.
      return of(result as T);
    };
  }
  getEncadrantIdentifiantForEtudiant(etudiantIdentifiant: string): Observable<string> {
    return this.httpClient.get<string>(`${this.tacheUrl}encadrant/${etudiantIdentifiant}`, { responseType: 'text' as 'json' });
  }
  
  // Method to fetch tasks assigned to students supervised by a particular supervisor
  getTasksForSupervisor(supervisorId: number): Observable<Tache[]> {
    return this.httpClient.get<Tache[]>(`${this.tacheUrl}encadrant/${supervisorId}/taches-etudiants-encadres`);
  }

  countTachesAffectees(encadrantId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.tacheUrl}count/${encadrantId}`);
  }
  countEtudiantsEncadres(encadrantId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.tacheUrl}count/encadrement/${encadrantId}`);
  }
  countTachesTermineesEncadrees(encadrantId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.tacheUrl}count/done/${encadrantId}`);
  }
  countTachesEtudiantEncadre(encadrantId: number, etudiantId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.tacheUrl}encadrant/${encadrantId}/etudiant/${etudiantId}/count`);
  }
}


  



