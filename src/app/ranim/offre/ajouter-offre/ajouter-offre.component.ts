import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffreService } from '../offre.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-ajouter-offre',
  templateUrl: './ajouter-offre.component.html',
  styleUrls: ['./ajouter-offre.component.css']
})
export class AjouterOffreComponent implements OnInit {
  map: L.Map;
  offreForm: FormGroup;

  constructor(private offreService: OffreService, private fb: FormBuilder) { } // Injectez OffreService ici

  ngOnInit() {
    this.offreForm = this.fb.group({
      latitude: ['', Validators.required],
      longitude: ['', Validators.required]
    });
    if (this.offreForm && this.offreForm.controls.latitude) {
      this.offreForm.controls.latitude.patchValue(123);
    }
    
    this.initMap();
  this.resetForm();
    if (this.map) {
      this.map.on('click', (e: L.LeafletMouseEvent) => {
        this.offreForm.patchValue({
          latitude: e.latlng.lat,
          longitude: e.latlng.lng
        });
      });
    } else {
      console.error('La carte Leaflet n\'a pas été initialisée correctement.');
    }
  }
  
  initMap(): void {
    this.map = L.map('map').setView([0, 0], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  onSubmit(): void {
    if (this.offreForm.valid) {
      this.offreService.addOffre(this.offreForm.value).subscribe(() => {
        // Action après l'ajout de l'offre
      });
    }
  }

  addOffre() {
    if (this.offreForm.valid) {
      this.offreService.addOffre(this.offreForm.value).subscribe(
        res => {
          console.log("Réponse du service :", res);
          // Action après l'ajout de l'offre avec succès
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
  resetForm() {
    this.offreForm.reset();
  }
  
}
