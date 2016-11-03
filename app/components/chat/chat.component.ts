import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService }      from '../../services/chat.service';

@Component({
  moduleId: module.id,
  selector: 'chat',
  templateUrl: 'chat.component.html'
})

export class ChatComponent implements OnInit, OnDestroy {
  messages:any=[];
  message:string;
  connection: any;
  username:string;
  alert:any = false;

  constructor(private _chatService:ChatService) {

  }

  sendMessage(message:string){
    this._chatService.sendMessage(this.message, this.username);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this._chatService.getMessages().subscribe((message:any) => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  addUsername() {
    this._chatService.setUsername(this.username);
    this.alert = 'Username set';
  }
}
