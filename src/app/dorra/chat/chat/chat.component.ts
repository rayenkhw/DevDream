import { Component, OnInit } from '@angular/core';
import { Chat, Message } from '../chat.module';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chats : Chat[] = [];
  isPopupVisible: boolean = false;
  messages : Message[] =[];
  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.loadchats();
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
    this.isPopupVisible = true;
    
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }




}
