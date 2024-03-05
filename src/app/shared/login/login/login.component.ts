import { Component } from '@angular/core';
import { AuthService } from 'app/service/auth.service';
import { AuthenticationRequest } from 'app/user';
import { AdminLayoutRoutes } from 'app/layouts/admin-layout/admin-layout.routing';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
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
      //     setTimeout(() => this.router.navigate(['/admin/user']), 1500);
      // } else {
      //     setTimeout(() => this.router.navigate(['/user']), 1500);
      // }
      if (response.role == 'Esprit') {
        setTimeout(() => this.router.navigate(['/admin/user']), 1500);
    } else if (response.role == 'entreprise') {
        setTimeout(() => this.router.navigate(['/entreprise']), 1500); // Assurez-vous que la route '/entreprise' est correctement définie dans votre module de routage
    } else if (response.role == 'etudiant') {
        setTimeout(() => this.router.navigate(['/etudiant']), 1500); // Assurez-vous que la route '/etudiant' est correctement définie dans votre module de routage
    } else {
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

  


