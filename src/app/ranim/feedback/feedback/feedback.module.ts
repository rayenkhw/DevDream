import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Feedback { 
  idUser: number;
  commentaire: string;
  nom: string;
}
