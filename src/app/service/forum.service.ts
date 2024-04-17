import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,tap } from 'rxjs';
import { Interaction, Post } from 'app/models/forum.model';
import { CommentairePost } from 'app/models/forum.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private postapiUrl = 'http://localhost:9000/DevDream/api/post'
  private commentairePostapiUrl = 'http://localhost:9000/DevDream/api/commentairePost'
  private badWordsList = ['badword1', 'badword2', 'badword3'];
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postapiUrl}/allPosts`);
  }


  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.postapiUrl}/addPost`, post);
  }
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.postapiUrl}/updatePost`, post);
  }
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.postapiUrl}/post/${id}`);
  }
  filterText(text: string): string {
    const foundBadWord = this.badWordsList.some(badWord => 
      new RegExp(badWord, 'gi').test(text)
    );
    if (foundBadWord) {
      
      throw new Error('Le contenu contient des mots inappropriés et a été bloqué.');
    }
    return text;
  }

  updatePostBadge(id_Post: number): Observable<any> {
    return this.http.put(`${this.postapiUrl}/${id_Post}/update-badge`, {});
  }
  

  // CRUD pour les commentairesl
  getCommentairesByPostId(id_Post: number): Observable<CommentairePost[]> {
    const url = `${this.commentairePostapiUrl}/${id_Post}/commentairePosts`; // Construisez l'URL pour accéder à l'API
    return this.http.get<CommentairePost[]>(url); // Utilisez HttpClient pour effectuer une requête GET
  }
  

  addCommentairePost(id_Post: number, commentaire: { contenu: string }): Observable<CommentairePost> {
    const url = `http://localhost:9000/DevDream/api/commentairePost/posts/${id_Post}/commentaires`;
    return this.http.post<CommentairePost>(url, commentaire);
  }
  deleteCommentairePost(id_Post: number): Observable<any> {
    return this.http.delete(`${this.commentairePostapiUrl}/commentairePost/${id_Post}`);
}


//////////////// interactions
toggleLike(id_Post: number, id: number): Observable<any> {
  const url= `http://localhost:9000/DevDream/api/interactions/like/${id_Post}/${id}`;
  return this.http.post(url, {}, { responseType: 'text' });
}
toggleDislike(id_Post: number, id: number): Observable<any> {
  const url= `http://localhost:9000/DevDream/api/interactions/dislike/${id_Post}/${id}`;
  return this.http.post(url, {}, { responseType: 'text' });
}

toggleLove(id_Post: number, id: number): Observable<any> {
  const url= `http://localhost:9000/DevDream/api/interactions/love/${id_Post}/${id}`;
  return this.http.post(url, {}, { responseType: 'text' });
}

getLikesCount(id_Post: number): Observable<number> {
  const url = `http://localhost:9000/DevDream/api/interactions/likes/count/${id_Post}`;

  return this.http.get<number>(url).pipe(
    map(response => {
      return response; // Aucun besoin de convertir, si le backend renvoie déjà un nombre
    })
  );
}

getDislikesCount(id_Post: number): Observable<number> {
  const url = `http://localhost:9000/DevDream/api/interactions/dislikes/count/${id_Post}`;
  
  // Notez que { responseType: 'text' } doit être passé dans les options d'appel de http.get
  return this.http.get(url, { responseType: 'text' }).pipe(
    map(response => {
      // Convertissez la réponse de texte en nombre
      return Number(response);
    })
  );
}

getLovesCount(id_Post: number): Observable<number> {
  const url = `http://localhost:9000/DevDream/api/interactions/loves/count/${id_Post}`;
  
  // Notez que { responseType: 'text' } doit être passé dans les options d'appel de http.get
  return this.http.get(url, { responseType: 'text' }).pipe(
    map(response => {
      // Convertissez la réponse de texte en nombre
      return Number(response);
    })
  );
}

}
