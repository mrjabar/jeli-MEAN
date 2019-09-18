import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  title = 'Jayem Discussion Forum';
  message = '';
  chats = [];
  username;
  user;

  constructor(private messageService: MessageService) {
    this.messageService.getChats().subscribe((data) => {
      this.chats = data;
      window.setInterval(() => {
        const elem = document.getElementById('scrolldiv');
        elem.scrollTop = elem.scrollHeight;
      }, 500);
    });
  }

  addChat() {
    if (this.message.length === 0) {
      return;
    }
    this.messageService.addChat(this.message);
    this.message = '';
  }

  // addUser(user) {
  //   this.messageService.addUser(user);
  //   this.username = user;
  // }
}
