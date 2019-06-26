import { Cliente } from './../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlClientes: string = "http://localhost:3000/clientes"

  constructor(private httpClient: HttpClient) { }

  registerCliente(cliente: Cliente){
    return this.httpClient.post(`${this.urlClientes}/register`, cliente);
  }

  list(){
    return this.httpClient.get(`${this.urlClientes}/list`);
  }

  retrieveByEmail(email: string){
    return this.httpClient.get(`${this.urlClientes}/retrieve/email/${email}`);
  }

  retrieveById(id: string){
    return this.httpClient.get(`${this.urlClientes}/retrieve/${id}`);
  }
}