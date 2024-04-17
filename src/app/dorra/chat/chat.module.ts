import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';



@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Chat {


id_chat : number;
user1 : User;
user2 : User;
messages : Message[];
 }


export class Message {

id_message : number;
msg : string;
from : User;

 }

 export class User {

  id : number;
  email : string;
  nom : string;
  prenom : string;
   }