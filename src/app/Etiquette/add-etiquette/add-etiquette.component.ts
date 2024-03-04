import { Component, OnInit } from '@angular/core';
import { Etiquette } from 'app/Models/etiquette';
import { EtiquetteService } from 'app/Services/EtiquetteService/etiquette.service';

@Component({
  selector: 'app-add-etiquette',
  templateUrl: './add-etiquette.component.html',
  styleUrls: ['./add-etiquette.component.css']
})
export class AddEtiquetteComponent implements OnInit {
  nouvelleEtiquette: string;

  constructor(private etiquetteService: EtiquetteService) {}

  ajouterEtiquette(): void {
    if (!this.nouvelleEtiquette || !this.nouvelleEtiquette.trim()) {
      return;
    }
    const etiquette: Etiquette = {
      id_etiquette: null,
      text: this.nouvelleEtiquette,
      tache: null, 
    };
    this.etiquetteService.saveEtiquette(etiquette).subscribe(() => {
      console.log('etiquette ajouté avec succès');
      this.nouvelleEtiquette = '';
    }, error => {
      console.error('Erreur lors de l\'ajout du etiquette : ', error);
    });
  }

  ngOnInit(): void {
  }
}
