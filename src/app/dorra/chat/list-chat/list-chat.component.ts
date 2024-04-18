import { Component, OnInit } from '@angular/core';
import { Chat, Message } from '../chat.module';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/Services/UserService/auth.service';
import { UserService } from 'app/Services/UserService/user.service';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.css']
})
export class ListChatComponent implements OnInit {

  chats : Chat[] = [];
  isPopupVisible: boolean = false;
  messages : Message[] =[];
  user: any;
  msg : string='';
  inputMessage: string = '';
  idmsg : number;
  idchat : number;
  constructor(private router: Router,private http: HttpClient,private authService: AuthService,private userService: UserService) { }

  ngOnInit(): void {
    this.loadchats();
    this.user = this.authService.getUserDetails();
  }


  loadchats(): void {
    this.http.get<Chat[]>("http://localhost:9000/DevDream/chat/retrieve-all-chats").subscribe(
      (data: Chat[]) => {
        this.chats = data;
      },
      (error) => {
        console.error('affichage maye5demch', error);
      }
      
    );
    
  }
  openPopup(chat: Chat): void {
    console.log('Chat object received:', chat);
    this.messages = chat.messages;
    this.idchat = chat.id_chat;
    this.isPopupVisible = true;
    
    
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }
// Function to handle button click event
sendMessage(): void {
  
  // Assign the input value to the msg variable
  this.msg = this.inputMessage;
  // Optionally, you can reset the input field after capturing the value
  this.inputMessage = '';
  // You can now use the this.msg variable as needed
  
  this.http.post("http://localhost:9000/DevDream/chat/sendmessage/"+"2/"+this.idchat+"/"+this.msg, {}).subscribe(
    (response) => {
      console.log("message sent successfully", response);
    },
    (error) => {
      console.error("Error sending message", error);
    }
  );
  
}




}
