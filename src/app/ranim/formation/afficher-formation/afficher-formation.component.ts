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
  mot_cle: string = '';
  formations: Formation[] = [];
  validateForm: FormGroup;
  message: string = '';

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
    this.validateForm = this.fb.group({
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

  modifyFormation(formation: Formation): void {
    if (this.validateForm.valid) {
      const modifyFormation: Formation = {
        id_formation: formation.id_formation,
        titre: this.validateForm.value.titre,
        description: this.validateForm.value.description,
        date_debut_formation: this.validateForm.value.date_debut_formation,
        date_fin_formation: this.validateForm.value.date_fin_formation,
        message: '',
        mot_cle: '',
        isLiked: false,
        nombreLikes: 0,
        nombreJadore: 0
      };
      this.formationService.modifyFormation(modifyFormation.id_formation, modifyFormation).subscribe(
        (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'La formation a été modifiée avec succès!';
          this.loadFormations(); // Recharge les formations après la modification
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


