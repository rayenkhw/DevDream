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
import { MatTableModule } from '@angular/material/table';
import { UserLayoutModule } from './layouts/user-layout/user-layout.module';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input'; // Assurez-vous d'importer MatInputModule si vous utilisez mat-form-field
import { ConfirmationdialogComponent } from './confirmationdialog/confirmationdialog.component';
import { ErrorsComponent } from './errors/errors.component';
import { EncadrantComponent } from './encadrant/encadrant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { DetailTacheComponent } from './Tache/detail-tache/detail-tache.component';






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
    DragDropModule
   
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AccueilComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    UserLayoutComponent,
   
    ConfirmationdialogComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
