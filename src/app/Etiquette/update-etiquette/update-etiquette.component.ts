import { Component, OnInit } from '@angular/core';
import { Etiquette } from 'app/Models/etiquette';
import { EtiquetteService } from 'app/Services/EtiquetteService/etiquette.service';

@Component({
  selector: 'app-update-etiquette',
  templateUrl: './update-etiquette.component.html',
  styleUrls: ['./update-etiquette.component.css']
})
export class UpdateEtiquetteComponent implements OnInit {
  etiquettes: Etiquette[]=[];
  etiquetteSelectionne: Etiquette | null = null; 
  constructor(private etiquetteservice: EtiquetteService) { }

  ngOnInit(): void {
    this.loadEtiquettes(); 
  }
  loadEtiquettes(): void {
    this.etiquetteservice.getAllEtiquettes().subscribe((data: Etiquette[]) => {
      this.etiquettes = data;
    });
  }
  selectEtiquette(etiquette: Etiquette): void {
    this.etiquetteSelectionne = etiquette; // Sélectionnez le commentaire choisi par l'utilisateur
  }
  updateEtiquette(): void {
    if (this.etiquetteSelectionne) {
      this.etiquetteservice.updateEtiquette(this.etiquetteSelectionne.id_etiquette,this.etiquetteSelectionne)
        .subscribe(() => {
          console.log('etiquette mis à jour avec succès');
          // Réinitialisez le commentaire sélectionné après la mise à jour réussie
          this.etiquetteSelectionne = null;
        }, error => {
          console.error('Erreur lors de la mise à jour du etiquette : ', error);
        });
    }
  }
}
