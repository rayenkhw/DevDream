import { Injectable } from '@angular/core';
import { Commentaire } from 'app/Models/commentaire';
import {environment} from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { forkJoin,of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '../UserService/user.service';
import { AuthService } from '../UserService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private commentaireUrl: string;
  commentaires:Commentaire[]=[];

  constructor(private httpClient: HttpClient,
    private userService:UserService,
    private authservice:AuthService) {
      
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
  
    getCommentsWithUsersByTacheId(tacheId: number): Observable<Commentaire[]> {
      //const userId = this.authservice.getCurrentUserDetails().idUser;
      return this.httpClient.get<Commentaire[]>(`${this.commentaireUrl}${tacheId}`).pipe(
        map(comments => {
          return comments.map(comment => {
            return {
              ...comment,
              user: this.getUserForComment(comment)
            };
          });
        }),
        catchError(error => {
          console.error('Error fetching comments:', error);
          return throwError(error);
        })
      );
    }
    private getUserForComment(comment: Commentaire): Observable<any> {
      if (!comment || !comment.tache) {
        console.error('Invalid comment or task:', comment);
        return of(null);
      }
    
      const tache = comment.tache;
    
      if (this.authservice.isAuthenticated()) {
        if (tache.etudiant && tache.etudiant.idUser) {
          return this.userService.getUserById(tache.etudiant.idUser).pipe(
            catchError(error => {
              console.error('Error fetching user for comment:', error);
              return of(null);
            })
          );
        } else if (tache.encadrant && tache.encadrant.idUser) {
          return this.userService.getUserById(tache.encadrant.idUser).pipe(
            catchError(error => {
              console.error('Error fetching user for comment:', error);
              return of(null);
            })
          );
        } else {
          console.error('No associated user found for the comment:', comment);
          return of(null);
        }
      } else {
        console.error('User is not authenticated.');
        return of(null);
      }
    }
    
    
    
  
    ajouterCommentaire(tacheId: number, contenu: string, userId: number): Observable<Commentaire> {
      return this.httpClient.post<Commentaire>(`${this.commentaireUrl}${tacheId}/utilisateurs/${userId}`, contenu);
    }
    
  

    modifyCommentaire(tacheId: number, commentaireId: number, userId: number, nouveauContenu: string): Observable<Commentaire> {
      const url = `${this.commentaireUrl}${tacheId}/commentaires/${commentaireId}/utilisateurs/${userId}`;
      const body = { contenu: nouveauContenu }; // Créez un objet JSON avec le contenu du commentaire
      return this.httpClient.put<Commentaire>(url, body);
    }

 
 
}
