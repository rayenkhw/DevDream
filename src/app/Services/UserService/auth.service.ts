import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationRequest, AuthenticationResponse } from 'app/Models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9000/DevDream/api/v1/auth/authenticate';
  private currentUser: AuthenticationResponse;

  constructor(private http: HttpClient,private router: Router) { }

  authenticate(request: AuthenticationRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, request).pipe(
      tap(response => {
        this.saveToken(response.jwtToken);
        this.saveUserDetails(response);
      })
    );
  }

  getCurrentUser(): Observable<AuthenticationResponse> {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    return of(userDetails);
  }

  public getCurrentUserDetails(): AuthenticationResponse {
    return this.currentUser;
  }

  public saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  public saveUserDetails(response: AuthenticationResponse): void {
    this.currentUser = response;
    const userDetails = {
      idUser: response.idUser,
      identifiant: response.identifiant,
      nom: response.nom,
      prenom: response.prenom,
      image: response.image,
      email: response.email,
      role: response.role,
      disponibilite: response.disponibilite
    };
    
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  }
  logout() {
    // Supprimez les données d'authentification de l'utilisateur
    localStorage.removeItem('userToken');
    // Redirigez l'utilisateur vers la page de connexion
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    const authToken = localStorage.getItem('authToken');
    return !!authToken;
  }
  getIdentifiant(): string {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    return userDetails ? userDetails.identifiant : null;
  }

  getEncadrantId(): Observable<number> {
    // Récupérer les détails de l'utilisateur actuellement connecté
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    // Vérifier si l'utilisateur a un rôle d'encadrant
    if (userDetails && userDetails.role === 'Encadrant') {
      // Retourner l'ID de l'utilisateur
      return of(userDetails.idUser);
    } else {
      // Si l'utilisateur n'est pas un encadrant, retourner une erreur ou une valeur par défaut
      return throwError("L'utilisateur n'est pas un encadrant");
    }
  }
  IsLoggedIn(){
    return !!localStorage.getItem('token');
    
    }

    
updateUserDetails(userDetails: any): Observable<any> {
  const updateUrl = 'http://localhost:8081/api/v1/user/update'; // URL pour la mise à jour de l'utilisateur
  return this.http.put(updateUrl, userDetails).pipe(
    tap(response => {
      // Mettez à jour les détails de l'utilisateur dans localStorage si nécessaire
      this.saveUserDetails(response);
    })
  );
}

getUserDetails() {
  const userDetailsString = localStorage.getItem('userDetails');
  if (userDetailsString) {
    return JSON.parse(userDetailsString);
  }
  return null;
}
}
