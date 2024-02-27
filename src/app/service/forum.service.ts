import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,tap } from 'rxjs';
import { Post } from 'app/models/forum.model';
import { CommentairePost } from 'app/models/forum.model';
@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private postapiUrl = 'http://localhost:9000/DevDream/api/post'
  private commentairePostapiUrl = 'http://localhost:9000/DevDream/api/commentairePost'

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





  // CRUD pour les commentairesl
  getCommentairePosts(): Observable<CommentairePost[]> {
    return this.http.get<CommentairePost[]>(`${this.commentairePostapiUrl}/allCommentairePosts`);
  }

  getCommentairePostById(id: number): Observable<CommentairePost> {
    return this.http.get<CommentairePost>(`${this.commentairePostapiUrl}/commentairePost/${id}`);
  }


  addCommentairePost(commentairePost: CommentairePost): Observable<CommentairePost> {
    return this.http.post<CommentairePost>(`${this.commentairePostapiUrl}/addCommentairePost`, commentairePost);
  }
  updateCommentairePost(commenatairePost: CommentairePost): Observable<CommentairePost> {
    return this.http.put<CommentairePost>(`${this.commentairePostapiUrl}/updateCommentairePost`, commenatairePost);
  }
  deleteCommentairePost(id: number): Observable<any> {
    return this.http.delete(`${this.commentairePostapiUrl}/commentairePost/${id}`);
}

}
