import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
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
import { ApplicationListComponent } from './application/application-list/application-list.component';
import { ApplicationAjoutComponent } from './application/application-ajout/application-ajout.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserArchivesComponent } from './user-archives/user-archives.component';











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
    UserAddComponent,
    UserArchivesComponent,
   
    
  
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
