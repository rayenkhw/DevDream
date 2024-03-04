import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReponseAjoutComponent } from './reponse-ajout/reponse-ajout.component';
import { FormsModule } from '@angular/forms';
import { ReponseListComponent } from './reponse-list/reponse-list.component';



@NgModule({
  declarations: [
    ReponseAjoutComponent,
    ReponseListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, 
  ]
})
export class Reponse {

  id_reponse: number;
  reponse:string;

}