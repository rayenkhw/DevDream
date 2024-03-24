import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class Formation {
  id_formation: number;
  description: string;
  titre: string;
  date_debut_formation: Date;
  date_fin_formation: Date;
  message: any;
  mot_cle: string;

 }
