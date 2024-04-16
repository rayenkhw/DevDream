import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './not-found/notfound/notfound.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutRoutes } from './layouts/admin-layout/admin-layout.routing';
import { UserLayoutRoutes } from './layouts/user-layout/user-layout.routing';
import { FormationUserComponent } from './ranim/formation-user/formation-user/formation-user.component';
import { OffreUserComponent } from './ranim/offre-user/offre-user/offre-user.component';
import { HomeComponent } from './shared/home/home/home.component';
import { LoginComponent } from './shared/login/login/login.component';
import { AccueilComponent } from './shared/accueil/accueil/accueil.component';
;
import { ListEtudiantComponent } from './ranim/offre/list-etudiant/list-etudiant.component';
import { AjouterOffreComponent } from './ranim/offre/ajouter-offre/ajouter-offre.component';
import { AfficherOffreComponent } from './ranim/offre/afficher-offre/afficher-offre.component';
import { AfficherFormationComponent } from './ranim/formation/afficher-formation/afficher-formation.component';
import { AjouterFormationComponent } from './ranim/formation/ajouter-formation/ajouter-formation.component';
import { DashboardComponent } from './dashboard/dashboard.component';





const routes: Routes =[
  {path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"accueil",component:AccueilComponent},
  
// ******
//  {
//     path: 'admin',
//     component: AdminLayoutComponent,
//     children: [{
//       path: 'admin',
//       loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
//     }]
//   },


{
  path: 'admin',
  component: AdminLayoutComponent,
  children: AdminLayoutRoutes
},

  {
    path: 'user',
    component: UserLayoutComponent,
    children:UserLayoutRoutes}
   ,

  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
