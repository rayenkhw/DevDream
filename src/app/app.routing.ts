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
import { FeedbackComponent } from './ranim/feedback/feedback.component';




const routes: Routes =[
  {path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"accueil",component:AccueilComponent},
  {path:"formation-user",component:FormationUserComponent},
  {path:"offre-user",component:OffreUserComponent},
  {path:"feedback",component:FeedbackComponent},
  


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
