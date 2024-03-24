import { Component, OnInit } from '@angular/core';
import { FormationService } from '../formation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formation } from '../formation.module';



@Component({
  selector: 'app-afficher-formation',
  templateUrl: './afficher-formation.component.html',
  styleUrls: ['./afficher-formation.component.css']
})
export class AfficherFormationComponent implements OnInit {
mot_cle: any;
addFormation() {
throw new Error('Method not implemented.');
}
  formations: Formation[] = [];
  ValidateForm: FormGroup;
  message: string;

  constructor(private formationService: FormationService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadFormations();
    this.initializeForm(); // Initialise le formulaire lors de l'initialisation du composant
  }

  loadFormations(): void {
    this.formationService.getFormations().subscribe(
      (data: Formation[]) => {
        this.formations = data;
      },
      error => {
        console.error('Error fetching formations:', error);
      }
    );
  }

  initializeForm(): void {
    this.ValidateForm = this.fb.group({
      titre: [null, [Validators.required]],
      description: [null, [Validators.required]],
      date_debut_formation: [null, [Validators.required]],
      date_fin_formation: [null, [Validators.required]]
    });
  }

  removeFormation(id_formation: number): void {
    this.formationService.removeFormation(id_formation).subscribe(
      () => {
        this.loadFormations();
      },
      error => {
        console.error('Erreur lors de la suppression de l\'information:', error);
      }
    );
  }

  modifyFormation(formations: Formation): void {
    if (this.ValidateForm && this.ValidateForm.valid) { // Vérifie que le formulaire est défini et valide
      const updatedFormation: Formation = {
        id_formation: formations.id_formation,
        titre: this.ValidateForm.value.titre,
        description: this.ValidateForm.value.description,
        date_debut_formation: this.ValidateForm.value.date_debut_formation,
        date_fin_formation: this.ValidateForm.value.date_fin_formation,
        message: undefined,
        mot_cle: ''
      };
      this.formationService.modifyFormation(updatedFormation.id_formation, updatedFormation).subscribe(
        (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'La formation a été modifiée avec succès!';
        },
        error => {
          console.error('Erreur lors de la modification de la formation:', error);
          this.message = 'Une erreur est survenue lors de la modification de la formation';
        }
      );
    }
  }
  searchFormations(mot_cle: string): void {
    this.formationService.searchFormations(mot_cle).subscribe(formations => {
      this.formations = formations;
    });
  }
}


