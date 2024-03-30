import { Component, OnInit , AfterViewInit, ViewChild, Renderer2,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffreService } from '../offre.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ajouter-offre',
  templateUrl: './ajouter-offre.component.html',
  styleUrls: ['./ajouter-offre.component.css']
})
export class AjouterOffreComponent implements OnInit{

 
  offreForm: FormGroup;
 

  constructor(private offreService: OffreService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.offreForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      skills: ['', Validators.required],
      duree: ['', Validators.required],
      
    });
  }

  addOffre() {
    if (this.offreForm.valid) {
      this.offreService.addOffre(this.offreForm.value).subscribe(
        res => {
          console.log("Réponse du service :", res);
          // Navigation vers la page d'affichage des offres après ajout réussi
          this.router.navigate(['/admin/afficher-offre']);
        },
        error => {
          console.error("Erreur lors de l'ajout de l'offre :", error);
          // Gérer l'erreur d'ajout de l'offre ici
        }
      );
    } else {
      console.log("Veuillez remplir tous les champs du formulaire.");
    }
  }

 
}
