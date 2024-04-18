import { Routes } from '@angular/router';
import { AddcommentaireComponent } from 'app/Commentaire/AddCommentaire/addcommentaire.component';
import { ListcommentaireComponent } from 'app/Commentaire/ListeOfCommentaire/listcommentaire.component';
import { UpdatecommentaireComponent } from 'app/Commentaire/UpdateCommentaire/updatecommentaire.component';
import { AddEtiquetteComponent } from 'app/Etiquette/add-etiquette/add-etiquette.component';
import { AllEtiquetteComponent } from 'app/Etiquette/all-etiquette/all-etiquette.component';
import { UpdateEtiquetteComponent } from 'app/Etiquette/update-etiquette/update-etiquette.component';
import { AddstageComponent } from 'app/Stage/addstage/addstage.component';
import { AllstageComponent } from 'app/Stage/allstage/allstage.component';
import { UpdatestageComponent } from 'app/Stage/updatestage/updatestage.component';
import { AddtacheComponent } from 'app/Tache/addtache/addtache.component';
import { AlltacheComponent } from 'app/Tache/alltache/alltache.component';
import { DetailTacheComponent } from 'app/Tache/detail-tache/detail-tache.component';
import { DetailtachencadrantComponent } from 'app/Tache/detailtachencadrant/detailtachencadrant.component';
import { UpdateTacheComponent } from 'app/Tache/updatetache/updatetache.component';
import { ApplicationAjoutComponent } from 'app/application/application-ajout/application-ajout.component';
import { ApplicationListComponent } from 'app/application/application-list/application-list.component';
import { NavbarComponent } from 'app/components/navbar/navbar.component';
import { DashboardComponent } from 'app/dashboard copy/dashboard.component';
import { ListChatComponent } from 'app/dorra/chat/list-chat/list-chat.component';
import { NotificationAjoutComponent } from 'app/dorra/notification/notification-ajout/notification-ajout.component';
import { NotificationListComponent } from 'app/dorra/notification/notification-list/notification-list.component';
import { ReclamationAjoutComponent } from 'app/dorra/reclamation/reclamation-ajout/reclamation-ajout.component';
import { ReclamationListComponent } from 'app/dorra/reclamation/reclamation-list/reclamation-list.component';
import { ReponseAjoutComponent } from 'app/dorra/reponse/reponse-ajout/reponse-ajout.component';
import { ReponseListComponent } from 'app/dorra/reponse/reponse-list/reponse-list.component';

import { EncadrantComponent } from 'app/encadrant/encadrant.component';
import { EtudiantComponent } from 'app/etudiant/etudiant.component';
import { GhofraneComponent } from 'app/ghofrane/ghofrane.component';
import{ PostComponent } from 'app/post/post.component';
import { ProfileComponent } from 'app/profile/profile.component';
import { QuizComponent } from 'app/quiz/quiz.component';
import { AfficherFeedbackComponent } from 'app/ranim/feedback/afficher-feedback/afficher-feedback/afficher-feedback.component';
import { FeedbackComponent } from 'app/ranim/feedback/feedback.component';
import { FormationUserComponent } from 'app/ranim/formation-user/formation-user/formation-user.component';
import { AfficherFormationComponent } from 'app/ranim/formation/afficher-formation/afficher-formation.component';
import { AjouterFormationComponent } from 'app/ranim/formation/ajouter-formation/ajouter-formation.component';
import { OffreUserComponent } from 'app/ranim/offre-user/offre-user/offre-user.component';
import { AfficherOffreComponent } from 'app/ranim/offre/afficher-offre/afficher-offre.component';
import { AjouterOffreComponent } from 'app/ranim/offre/ajouter-offre/ajouter-offre.component';

import { DepotListComponent } from 'app/rayen/depot/depot-list/depot-list.component';
import { DepotUpdateComponent } from 'app/rayen/depot/depot-update/depot-update.component';
import { StageListComponent } from 'app/rayen/stage/stage-list/stage-list.component';

export const UserLayoutRoutes: Routes = [
  
     // {path:'',redirectTo:'ghofrane' ,pathMatch:'full'},

      { path: 'ghofrane', component: GhofraneComponent },
      { path: 'addcommentaire', component: AddcommentaireComponent },
      { path: 'updatecommentaire/:id', component: UpdatecommentaireComponent },
      { path: 'allcommentaire', component: ListcommentaireComponent },
      { path: 'addtache', component: AddtacheComponent },
      { path: 'updatetache/:id', component: UpdateTacheComponent },
      { path: 'addstage', component: AddstageComponent },
      { path: 'updatestage', component: UpdatestageComponent },
      { path: 'allstage', component: AllstageComponent },
      { path: 'addetiquette', component: AddEtiquetteComponent },
      { path: 'updateetiquette', component: UpdateEtiquetteComponent },
      { path: 'alletiquette', component: AllEtiquetteComponent },
      { path: 'alltache', component: AlltacheComponent },
      { path: 'detailtache/:id_tache', component: DetailTacheComponent },
      { path: 'detailtacheencadrant/:id_tache', component: DetailtachencadrantComponent },
      {path:"post", component:PostComponent},
      {path:"quiz", component:QuizComponent},
      

      { path: 'encadrant/:identifiant', component: EncadrantComponent },
      { path: 'etudiant/:identifiant', component: EtudiantComponent },
      {path :'ajout-reponse-admin/:id_Reclamation',component:ReponseAjoutComponent},
    {path :'list-reponse',component:ReponseListComponent},
    {path :'ajout-notification',component:NotificationAjoutComponent},
    {path:'list-notifications',component:NavbarComponent},
    {path:'list-notifications-admin',component:NotificationListComponent},
    {path:'chats',component:ListChatComponent},
    
    { path: 'ajout-reclamation',  component: ReclamationAjoutComponent},
    { path:'list-reclamations',component:ReclamationListComponent},
    { path: 'ajout-reponse/:id_Reclamation',  component: ReponseAjoutComponent},
    { path: 'list-applications',  component: ApplicationListComponent },
    { path: 'ajout-application',  component: ApplicationAjoutComponent },
    { path: 'list-stages', component: StageListComponent},
    { path: 'ajout-application',  component: ApplicationAjoutComponent },
    { path: 'affichage-depots',   component: DepotListComponent },
    { path: 'modify-depot/:id_depot', component: DepotUpdateComponent },
    { path: "formation-user", component: FormationUserComponent },
    { path: "offre-user", component: OffreUserComponent },
    { path: "feedback", component: FeedbackComponent },




 
    { path: 'ajouter-offre', component: AjouterOffreComponent },
    { path: 'afficher-offre', component: AfficherOffreComponent },
    { path: 'afficher-formation', component: AfficherFormationComponent },
    { path: 'ajouter-formation', component: AjouterFormationComponent },
    { path: 'afficher-feedback', component: AfficherFeedbackComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'Profile', component: ProfileComponent},
];
