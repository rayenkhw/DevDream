import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-ajouter-offre',
  templateUrl: './ajouter-offre.component.html',
  styleUrls: ['./ajouter-offre.component.css']
})
export class AjouterOffreComponent implements OnInit {

  validateForm!: FormGroup;



  constructor(private offreService: OffreService, private fb: FormBuilder) { } // Injectez OffreService ici

  ngOnInit() {
    this.validateForm = this.fb.group({
      titre: [null, [Validators.required]],
      description: [null, [Validators.required]],
      skills: [null, [Validators.required]],
      duree: [null, [Validators.required]]

    })
  }
  addOffre() {
    if (this.validateForm.valid) {
      console.log("Formulaire valide. Données du formulaire :", this.validateForm.value);
    this.offreService.addOffre(this.validateForm.value).subscribe(res =>{
      console.log("Réponse du service :", res);
    });
  }else {
      console.log("Veuillez remplir tous les champs du formulaire.");
    }

  }

}