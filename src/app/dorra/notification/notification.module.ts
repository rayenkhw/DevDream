import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationAjoutComponent } from './notification-ajout/notification-ajout.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NotificationAjoutComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class Notification { 
  id_notification:number;
  contenu:string;
  
}
