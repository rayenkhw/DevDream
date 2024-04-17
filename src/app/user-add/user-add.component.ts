import { Component,Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Niveau, Role, Specialite } from 'app/Models/user';
import { UserService } from 'app/Services/UserService/user.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent  implements OnInit {

  validateForm!: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) { } // Injectez OffreService ici
  roles = Object.values(Role);
  niveaux = Object.values(Niveau);
  specialites = Object.values(Specialite);
 // Image =  Object.values(Image);
  ngOnInit() {
    this.validateForm = this.fb.group({
     // identifiant: [null, [Validators.required]],
     nom: [null, [Validators.required, Validators.maxLength(50)]],
      prenom: [null, [Validators.required, Validators.maxLength(50)]],
      //cin: [null, [Validators.required, Validators.pattern(/^\d{8}$/)]], // Exemple de validation de CIN comme 8 chiffres.
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]], // Exemple de mot de passe avec une longueur minimum.
      role: [null, [Validators.required]],
      
      //Niveau: [null, [Validators.required]],
     // specialite: [null, [Validators.required]],
      //disponibilite: [null, [Validators.required]],
     // Image: [null], // Pas de validation spécifique si vous n'attendez pas un format spécifique.
      //chargeTravail: [null], // Ajustez selon les besoins.
     // Status: [null, [Validators.required]],
     // Tel: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]] // Exemple de validation de téléphone comme 10 chiffres.
    });
    
  }
   // addUser() {
  //   if (this.validateForm.valid) {
  //     console.log("Formulaire valide. Données du formulaire :", this.validateForm.value);
  //   this.userService.addUser(this.validateForm.value).subscribe(res =>{
  //     console.log("Réponse du service :", res); 
  //     this.router.navigate(['/admin/user']);
  //   });
  // }else {
  //     console.log("Veuillez remplir tous les champs du formulaire.");
  //   }

  // }
  addUser() {
    
    this.userService.addUser(this.validateForm.value).subscribe(res =>{
      console.log("Réponse du service :", res); 
      this.router.navigate(['/admin/user']);
    });
  
  }
}
