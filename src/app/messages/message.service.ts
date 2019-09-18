import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/messages/';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  chats = [];
  chatssub;
  private socket = io(BACKEND_URL);

  constructor() {
    this.chatssub = new Subject<any[]>();
    this.socket = io.connect();
    this.socket.on('connect', () => {
      console.log('connected to the server');
    });
    this.socket.on('message recieved', (data) => {
      this.chats.push(data);
      this.chatssub.next([...this.chats]);
    });
    this.socket.on('all messages', (data) => {
      this.chats = [...data];
      this.chatssub.next([...this.chats]);
    });
    this.socket.on('user connected', (data) => {
      this.chats.push({message: `${data} connected`, type: 'notify'});
      this.chatssub.next([...this.chats]);
    });
    this.socket.on('user disconnected', (data) => {
      this.chats.push({message: `${data} disconnected`, type: 'notify'});
      this.chatssub.next([...this.chats]);
    });
  }

  addChat(message) {
    this.socket.emit('new message', message);
  }

  addUser(user) {
    this.socket.emit('new user', user);
  }

  getChats() {
    return this.chatssub.asObservable();
  }
}

