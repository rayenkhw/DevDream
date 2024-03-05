import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from 'app/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/api/v1/auth/authenticate'; // URL de votre API


  constructor(private http: HttpClient) { }
  
IsLoggedIn(){
return !!localStorage.getItem('token');

}

  authenticate(request: AuthenticationRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, request).pipe(
      tap(response => {
        this.saveToken(response.token); // Sauvegarde le token JWT
        this.saveUserDetails(response); // Appel ici est correct car response est accessible
      })
    );
}

  public saveToken(token: string): void {
    localStorage.setItem('authToken', token);
    // Vous pouvez également vouloir stocker d'autres détails ou traiter le token ici
  }
  public saveUserDetails(response: any): void {
    const userDetails = {
        idUser: response.idUser,
        identifiant: response.identifiant,
        nom: response.nom,
        prenom: response.prenom,
        image: response.image,
        email: response.email,
        role: response.role,
        disponibilite: response.disponibilite
        // Ne pas sauvegarder le mot de passe pour des raisons de sécurité
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
}
}
