import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importez FormsModule depuis '@angular/forms'
import { AppComponent } from 'app/app.component';
import { AppRoutingModule } from 'app/app.routing';

import { CommonModule } from '@angular/common';
import { Competence } from '../competence/competence/competence.module';


// Importez d'autres composants ou modules nécessaires

@NgModule({
  declarations: [
    
    // Ajoutez d'autres composants ici
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,// Ajoutez FormsModule à la liste des imports
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  export class Offre {
        
    id_offre: number;
    description: string;
    titre: string;
    skills: string;
    duree: string;
   latitude:  number ;
   longitude: number;
  message: any;
  dateAjout?: Date;
  gouvernorat: string;
  ville: string;
  adresse: string;
    
    }

