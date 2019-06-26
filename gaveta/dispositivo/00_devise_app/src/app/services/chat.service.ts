import { Chat } from './../models/chat';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  urlChat: string = "http://localhost:3000/chat"

  constructor(private httpCliente: HttpClient) { }

  registerChat(chat: Chat){
    return this.httpCliente.post(`${this.urlChat}/register`, chat);
  }

  list(){
    return this.httpCliente.get(`${this.urlChat}/list`);
  }

  retrieveById(id: string){
    return this.httpCliente.get(`${this.urlChat}/retrieve/${id}`);
  }

  update(chat: Chat){
    return this.httpCliente.put(`${this.urlChat}/update/${chat._id}`, chat);
  }
  
}
