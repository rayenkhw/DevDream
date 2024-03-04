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
import { UpdateTacheComponent } from 'app/Tache/updatetache/updatetache.component';
import { AddUserComponent } from 'app/User/adduser/adduser.component';
import { AlluserComponent } from 'app/User/alluser/alluser.component';
import { UpdateuserComponent } from 'app/User/updateuser/updateuser.component';
import { EncadrantComponent } from 'app/encadrant/encadrant.component';
import { EtudiantComponent } from 'app/etudiant/etudiant.component';
import { GhofraneComponent } from 'app/ghofrane/ghofrane.component';

export const UserLayoutRoutes: Routes = [
  
      {path:'',redirectTo:'ghofrane' ,pathMatch:'full'},

      { path: 'ghofrane', component: GhofraneComponent },
      { path: 'addcommentaire', component: AddcommentaireComponent },
      { path: 'updatecommentaire/:id', component: UpdatecommentaireComponent },
      { path: 'allcommentaire', component: ListcommentaireComponent },
      { path: 'addtache', component: AddtacheComponent },
      { path: 'updatetache/:id', component: UpdateTacheComponent },
      { path: 'adduser', component: AddUserComponent },
      { path: 'updateuser', component: UpdateuserComponent },
      { path: 'alluser', component: AlluserComponent },
      { path: 'addstage', component: AddstageComponent },
      { path: 'updatestage', component: UpdatestageComponent },
      { path: 'allstage', component: AllstageComponent },
      { path: 'addetiquette', component: AddEtiquetteComponent },
      { path: 'updateetiquette', component: UpdateEtiquetteComponent },
      { path: 'alletiquette', component: AllEtiquetteComponent },
      { path: 'alltache', component: AlltacheComponent },
      { path: 'detailtache/:id', component: DetailTacheComponent },



      { path: 'encadrant/:identifiant', component: EncadrantComponent },
      { path: 'etudiant/:identifiant', component: EtudiantComponent }
  
];
