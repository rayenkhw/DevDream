import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationAjoutComponent } from './notification-ajout/notification-ajout.component';
import { FormsModule } from '@angular/forms';
import { NotificationListComponent } from './notification-list/notification-list.component';



@NgModule({
  declarations: [
    NotificationAjoutComponent,
    NotificationListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class Notification { 
  
}
