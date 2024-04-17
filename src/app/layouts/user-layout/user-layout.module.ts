import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLayoutRoutes } from './user-layout.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { GhofraneComponent } from 'app/ghofrane/ghofrane.component';
import { NavbarComponent } from 'app/components/navbar/navbar.component';
import { AddEtiquetteComponent } from 'app/Etiquette/add-etiquette/add-etiquette.component';
import { AddtacheComponent } from 'app/Tache/addtache/addtache.component';

import { AddstageComponent } from 'app/Stage/addstage/addstage.component';
import { AddcommentaireComponent } from 'app/Commentaire/AddCommentaire/addcommentaire.component';
import { UpdateEtiquetteComponent } from 'app/Etiquette/update-etiquette/update-etiquette.component';
import { UpdatecommentaireComponent } from 'app/Commentaire/UpdateCommentaire/updatecommentaire.component';
import { UpdatestageComponent } from 'app/Stage/updatestage/updatestage.component';

import { AllEtiquetteComponent } from 'app/Etiquette/all-etiquette/all-etiquette.component';
import { AllstageComponent } from 'app/Stage/allstage/allstage.component';

import { ListcommentaireComponent } from 'app/Commentaire/ListeOfCommentaire/listcommentaire.component';
import { AlltacheComponent } from 'app/Tache/alltache/alltache.component';
import { UpdateTacheComponent } from 'app/Tache/updatetache/updatetache.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorsComponent } from 'app/errors/errors.component';
import { EncadrantComponent } from 'app/encadrant/encadrant.component';
import { EtudiantComponent } from 'app/etudiant/etudiant.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DetailTacheComponent } from 'app/Tache/detail-tache/detail-tache.component';
import { SidebartaskComponent } from 'app/Tache/sidebartask/sidebartask.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { DetailtachencadrantComponent } from 'app/Tache/detailtachencadrant/detailtachencadrant.component';
import { DetailetudianttacheComponent } from 'app/Tache/detailetudianttache/detailetudianttache.component';
import { ChatbootComponent } from 'app/chatboot/chatboot.component';
import { ProfileComponent } from 'app/profile/profile.component';

   

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    DragDropModule,
    MatSidenavModule,
    MatIconModule
  ],
  declarations: [
    AddtacheComponent,
    AddEtiquetteComponent,
    
    AddstageComponent,
    AddcommentaireComponent,
    UpdateEtiquetteComponent,
    UpdateTacheComponent, // Ajouter le composant ici
    UpdatecommentaireComponent,
    UpdatestageComponent,
   
    AllEtiquetteComponent,
    AllstageComponent,
   
    ListcommentaireComponent,
    AlltacheComponent,
    GhofraneComponent,
    ErrorsComponent,
    EncadrantComponent,
    EtudiantComponent,
    DetailTacheComponent,
    SidebartaskComponent,
    ChatbootComponent,
    ProfileComponent,
        DetailtachencadrantComponent,
        
        DetailetudianttacheComponent
  ]
})

export class UserLayoutModule {}
