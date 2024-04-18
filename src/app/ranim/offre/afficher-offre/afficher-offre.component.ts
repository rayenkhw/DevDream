import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreService } from '../offre.service';
import { Offre } from '../offre.module';
@Component({
  selector: 'app-afficher-offre',
  templateUrl: './afficher-offre.component.html',
  styleUrls: ['./afficher-offre.component.css']
})
export class AfficherOffreComponent implements OnInit {
  offres: Offre[];
  message: string;
  editForm: FormGroup;
  isSuccess: boolean;
  selectedOffreId: number | null;
  showModify: boolean;
  Keywords: string;
  id_offre: number;

  constructor(
    public offreService: OffreService,
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadOffres();
    this.initializeForm();
  }

  loadOffres(): void {
    this.offreService.getOffres().subscribe({
      next: (data: Offre[]) => {
        this.offres = data;
      },
      error: error => {
        console.error('Error fetching offres:', error);
        this.message = 'Une erreur s\'est produite lors du chargement des offres. Veuillez réessayer plus tard.';
      }
    });
  }

  initializeForm(): void {
    this.editForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      skills: ['', Validators.required],
      duree: ['', Validators.required]
    });
  }

  onEditOffre(offre: Offre): void {
    this.selectedOffreId = offre.id_offre;
    this.editForm.patchValue({
      titre: offre.titre,
      description: offre.description,
      skills: offre.skills,
      duree: offre.duree
    });
    this.showModify = true; // Afficher le formulaire de modification
  }

  onUpdate(): void {
    if (this.editForm.valid && this.selectedOffreId !== null) {
      const updatedOffre: Offre = {
        ...this.editForm.value,
        id_offre: this.selectedOffreId
      };

      this.offreService.modifyOffre(this.selectedOffreId, updatedOffre).subscribe({
        next: () => {
          this.message = 'Offre mise à jour avec succès !';
          this.isSuccess = true;
          this.loadOffres();
          this.showModify = false; // Masquer le formulaire de modification après la mise à jour
        },
        error: (error) => {
          this.message = `Erreur lors de la mise à jour de l'offre : ${error.error.message || 'Veuillez réessayer plus tard.'}`;
          this.isSuccess = false;
        }
      });
    } else {
      this.message = 'Veuillez remplir le formulaire correctement.';
      this.isSuccess = false;
    }
  }

  removeOffre(id_offre: number): void {
    this.offreService.removeOffre(id_offre).subscribe(
      () => {
        this.loadOffres();
      },
      error => {
        console.error('Erreur lors de la suppression de l\'offre :', error);
      }
    );
  }

  searchOffers(keywords: string): void {
    this.offreService.searchOffers(keywords).subscribe(offres => {
      this.offres = offres;
    });
  }
}
