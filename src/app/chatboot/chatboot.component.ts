import { Component, OnInit } from '@angular/core';
import { ChatbootService, Message } from 'app/Services/chatboot.service';

@Component({
  selector: 'app-chatboot',
  templateUrl: './chatboot.component.html',
  styleUrls: ['./chatboot.component.css']
})
export class ChatbootComponent implements OnInit {
messages: Message[]=[];
value: string | undefined;
dialogInfo = true;
  constructor(public chatService:ChatbootService) { }

  ngOnInit(): void {
    this.chatService.conversation.subscribe((val)=>{
      this.messages=this.messages.concat(val);
    });
  }
  sendMessage(){
    this.chatService.getBotAnswer(this.value);
    this.value=''
  }

}