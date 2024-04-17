import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'app/Models/user';
import { AuthService } from 'app/Services/UserService/auth.service';
import { UserService } from 'app/Services/UserService/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  user: any;
  roles = Object.values(Role);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadUserData();
  }

  private initForm() {
    this.userProfileForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['']
    });
  }

  private loadUserData() {
    const userData = this.authService.getUserDetails();
    if (userData) {
      this.userProfileForm.patchValue({
        nom: userData.nom,
        prenom: userData.prenom,
        email: userData.email,
        role: userData.role,
      });
    }
  }

  updateUserProfile() {
    if (this.userProfileForm && this.userProfileForm.valid) {
      // Votre code de mise à jour de profil ici
    } else {
      console.log("Veuillez remplir tous les champs du formulaire.");
    }
  }

  private getUserID(): number {
    // Implémentez votre logique pour obtenir l'ID de l'utilisateur à mettre à jour
    return 26; // Placeholder pour l'exemple
  }
}
