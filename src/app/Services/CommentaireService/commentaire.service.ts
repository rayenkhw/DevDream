import { Injectable } from '@angular/core';
import { Commentaire } from 'app/Models/commentaire';
import {environment} from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { forkJoin,of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '../UserService/user.service';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private commentaireUrl: string;
  commentaires:Commentaire[]=[];

  constructor(private httpClient: HttpClient,private userService:UserService) {
    this.commentaireUrl=environment.baseUrl+"commentaire/" }

    getAllCommentaires(request): Observable<Commentaire[]> {
      const params= request;
      return this.httpClient.get<Commentaire[]>(this.commentaireUrl + "retrieve-all-commentaires", { params })
    }


    public saveCommentaire( commentaire: Commentaire):Observable<Commentaire> {
      return this.httpClient.post<Commentaire>(this.commentaireUrl+"addcommentaire", commentaire);
    }
    updateCommentaire(id: number, value: any): Observable<Commentaire> {
      return this.httpClient.put<Commentaire>(`${this.commentaireUrl+"modify-commentaire"}/${id}`, value);
    }
    getCommentaireById(id: number): Observable<Commentaire> {
      return this.httpClient.get<Commentaire>(`${this.commentaireUrl}retrieve-commentaire/${id}`);
    }
    deleteCommentaire(id: number): Observable<any> {
      return this.httpClient.delete(this.commentaireUrl + "remove-commentaire/" + id);
    }

    ajouterCommentaireATache(tacheId: number, commentaire: Commentaire): Observable<any> {
      return this.httpClient.post<any>(`tache/${tacheId}`, commentaire);
    }
  
    getCommentsWithUsersByTacheId(tacheId: number): Observable<any> {
      return this.httpClient.get<any>(`${this.commentaireUrl}${tacheId}`).pipe(
        switchMap(comments => {
          // Pour chaque commentaire, récupérer les informations de l'utilisateur associé à la tâche
          const observables = comments.map(comment => {
            let userId: number;
            if (comment.tache && comment.tache.etudiant) {
              userId = comment.tache.etudiant.id;
            } else if (comment.tache && comment.tache.encadrant) {
              userId = comment.tache.encadrant.id;
            }
            if (userId) {
              return this.userService.getUserById(userId).pipe(
                map(user => {
                  return {
                    ...comment,
                    user: user
                  };
                })
              );
            } else {
              // Gérer le cas où aucun utilisateur associé n'est trouvé
              console.error('Aucun utilisateur associé trouvé pour le commentaire :', comment);
              return of(comment); // Retourner le commentaire tel quel
            }
          });
          // Combiner tous les observables en un seul
          return forkJoin(observables);
        })
      );
    }
    
    
    
    
  
    ajouterCommentaire(tacheId: number, contenu: string, userId: number): Observable<Commentaire> {
      return this.httpClient.post<Commentaire>(`${this.commentaireUrl}${tacheId}/utilisateurs/${userId}`, contenu);
    }
    
    
    

 
 
}
