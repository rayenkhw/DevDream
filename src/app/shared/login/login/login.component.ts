import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/Services/UserService/auth.service';
import { AuthenticationRequest } from 'app/Models/user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  errorMessage: string | null = null;
  successMessage: string | null = null;
  
  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const request: AuthenticationRequest = this.loginForm.value as AuthenticationRequest;
  
    this.authService.authenticate(request).subscribe({
      next: (response) => {
        console.log('Authentication successful', response);
        this.successMessage = "Authentication successful";
        this.errorMessage = null;
        this.authService.saveToken(response.token);
        this.authService.saveUserDetails(response);
      //   if ( response.role == 'Esprit') {
      //     setTimeout(() => this.router.navigate(['/admin']), 1500);
      // } else {
      //     setTimeout(() => this.router.navigate(['/user']), 1500);
      // }

        // setTimeout(() =>this.router.navigate(['/admin/user']), 1500); // Rediriger l'utilisateur après une authentification réussie
        if (response.role == 'Esprit') {
          setTimeout(() => this.router.navigate(['/admin']), 1500);
      } else if (response.role == 'Entreprise') {
          setTimeout(() => this.router.navigate(['/user/dashboard']), 1500); // Assurez-vous que la route '/entreprise' est correctement définie dans votre module de routage
      } else if (response.role == 'Etudiant') {
          setTimeout(() => this.router.navigate(['/user']), 1500); // Assurez-vous que la route '/etudiant' est correctement définie dans votre module de routage
      }
      else if (response.role == 'Enseignant') {
        setTimeout(() => this.router.navigate(['/user/ajout-reclamation']), 1500); // Assurez-vous que la route '/etudiant' est correctement définie dans votre module de routage
    } 
    else if (response.role == 'Encadrant') {
      setTimeout(() => this.router.navigate(['/user/ghofrane']), 1500); // Assurez-vous que la route '/etudiant' est correctement définie dans votre module de routage
  }else {
          setTimeout(() => this.router.navigate(['/user']), 1500); // Fallback pour tous les autres rôles
      }
  
          // setTimeout(() =>this.router.navigate(['/admin/user']), 1500); // Rediriger l'utilisateur après une authentification réussie
        },
  
      error: (error) => {
        this.errorMessage = "User doesn't exist";
  this.successMessage = null;
        console.error('Authentication failed', error);
      },
    });
  }

}
