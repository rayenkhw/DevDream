import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AccueilComponent } from './shared/accueil/accueil/accueil.component';
import { HomeComponent } from './shared/home/home/home.component';
import { LoginComponent } from './shared/login/login/login.component';
import { NotfoundComponent } from './not-found/notfound/notfound.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { MatTableModule } from '@angular/material/table';
import { UserLayoutModule } from './layouts/user-layout/user-layout.module';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input'; // Assurez-vous d'importer MatInputModule si vous utilisez mat-form-field
import { ConfirmationdialogComponent } from './confirmationdialog/confirmationdialog.component';
//import { UserAddComponent } from './user-add/user-add.component';
//import { UserArchivesComponent } from './user-archives/user-archives.component';
import { BanneComponent } from './banne/banne.component';
import { AfficherOffreComponent } from './ranim/offre/afficher-offre/afficher-offre.component';
import { AjouterOffreComponent } from './ranim/offre/ajouter-offre/ajouter-offre.component';
import { AfficherFormationComponent } from './ranim/formation/afficher-formation/afficher-formation.component';
import { AjouterFormationComponent } from './ranim/formation/ajouter-formation/ajouter-formation.component';
import { FormationUserComponent } from './ranim/formation-user/formation-user/formation-user.component';
import { OffreUserComponent } from './ranim/offre-user/offre-user/offre-user.component';

import { FeedbackComponent } from './ranim/feedback/feedback.component';
import { AfficherFeedbackComponent } from './ranim/feedback/afficher-feedback/afficher-feedback/afficher-feedback.component';

import { MatSelectModule } from '@angular/material/select';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { ListEvaluationComponent } from './list-evaluation/list-evaluation.component';
import { PostComponent } from './post/post.component';
import { QuizComponent } from './quiz/quiz.component';
import { NotificationAjoutComponent } from './dorra/notification/notification-ajout/notification-ajout.component';
import { NotificationListComponent } from './dorra/notification/notification-list/notification-list.component';
import { ReclamationAjoutComponent } from './dorra/reclamation/reclamation-ajout/reclamation-ajout.component';
import { ReclamationListComponent } from './dorra/reclamation/reclamation-list/reclamation-list.component';
import { ReponseListComponent } from './dorra/reponse/reponse-list/reponse-list.component';
import { ReponseAjoutComponent } from './dorra/reponse/reponse-ajout/reponse-ajout.component';
import { ListChatComponent } from './dorra/chat/list-chat/list-chat.component';
import { ApplicationAjoutComponent } from './application/application-ajout/application-ajout.component';
import { ApplicationListComponent } from './application/application-list/application-list.component';
import { DepotListComponent } from './rayen/depot/depot-list/depot-list.component';
import { DepotUpdateComponent } from './rayen/depot/depot-update/depot-update.component';
import { StageListComponent } from './rayen/stage/stage-list/stage-list.component';



// Importez d'autres modules Angular Material selon vos besoins






@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    UserLayoutModule,
    CommonModule,
    MatPaginatorModule,
    MatInputModule,
    UserLayoutModule,
    DragDropModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AccueilComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    UserLayoutComponent,
    EvaluationComponent,
    ListEvaluationComponent,
    PostComponent,
    QuizComponent,
   
   
    ConfirmationdialogComponent, 
    BanneComponent,
    AfficherOffreComponent,
    AjouterOffreComponent,
  
    AfficherFormationComponent,
    AjouterFormationComponent,
    AjouterFormationComponent,
    AfficherFormationComponent,
    FormationUserComponent,
    OffreUserComponent,
   
    FeedbackComponent,
    AfficherFeedbackComponent,
    ListChatComponent,
    ApplicationAjoutComponent,
    ApplicationListComponent,
    DepotListComponent,
    DepotUpdateComponent,
    StageListComponent,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
