import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { NotfoundComponent } from './not-found/notfound/notfound.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { ApplicationListComponent } from './application/application-list/application-list.component';
import { ApplicationAjoutComponent } from './application/application-ajout/application-ajout.component';
import { AfficherOffreComponent } from './ranim/offre/afficher-offre/afficher-offre.component';
import { AjouterOffreComponent } from './ranim/offre/ajouter-offre/ajouter-offre.component';
import { ListEtudiantComponent } from './ranim/offre/list-etudiant/list-etudiant.component';
import { AfficherFormationComponent } from './ranim/formation/afficher-formation/afficher-formation.component';
import { AjouterFormationComponent } from './ranim/formation/ajouter-formation/ajouter-formation.component';
import { FormationUserComponent } from './ranim/formation-user/formation-user/formation-user.component';
import { OffreUserComponent } from './ranim/offre-user/offre-user/offre-user.component';
import { CompetenceComponent } from './ranim/competence/competence/competence.component';
import { HomeComponent } from './shared/home/home/home.component';
import { LoginComponent } from './shared/login/login/login.component';
import { AccueilComponent } from './shared/accueil/accueil/accueil.component';
import { FeedbackComponent } from './ranim/feedback/feedback.component';
import { AfficherFeedbackComponent } from './ranim/feedback/afficher-feedback/afficher-feedback/afficher-feedback.component';










@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AccueilComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    UserLayoutComponent,
    ApplicationListComponent,
    ApplicationAjoutComponent,
    AfficherOffreComponent,
    AjouterOffreComponent,
    ListEtudiantComponent,
    AfficherFormationComponent,
    AjouterFormationComponent,
    AjouterFormationComponent,
    AfficherFormationComponent,
    FormationUserComponent,
    OffreUserComponent,
    CompetenceComponent,
    FeedbackComponent,
    AfficherFeedbackComponent,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
