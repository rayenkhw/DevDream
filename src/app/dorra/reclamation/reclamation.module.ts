import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { ReclamationAjoutComponent } from './reclamation-ajout/reclamation-ajout.component';
import { ReponseAjoutComponent } from '../reponse/reponse-ajout/reponse-ajout.component';




@NgModule({
  declarations: [
    ReclamationAjoutComponent,
    ReclamationListComponent,
    

  ],
  imports: [
    CommonModule,
    FormsModule, 
  ]
})
export class Reclamation {


  id_Reclamation: number;
  id_reclamateur: number;
  id_cible_reclamation: number;
  contenu: string;
  typReclamation: string;
  status_reclamation: string;
}