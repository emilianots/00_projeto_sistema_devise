import { HttpClient } from '@angular/common/http';
import { Profissao } from './../models/profissao';
import { Profissional } from './../models/profissional';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  urlProfissionais: string = "http://localhost:3000/profissionais"

  constructor(private httpCliente: HttpClient) { }

  registerProfissional(profissional: Profissional){
    return this.httpCliente.post(`${this.urlProfissionais}/register`, profissional);
  }

  list(){
    return this.httpCliente.get(`${this.urlProfissionais}/list`);
  }

  retrieveByEmail(email: string, senha: string){
    return this.httpCliente.get(`${this.urlProfissionais}/retrieve/email/${email}/${senha}`);
  }

  retrieveById(id: string){
    return this.httpCliente.get(`${this.urlProfissionais}/retrieve/${id}`);
  }

  addProjetoId(id: string, projId: string){
    let elem = {_id: projId}
    console.log(id);
    console.log(elem);
    return this.httpCliente.put(`${this.urlProfissionais}/novoProjeto/${id}`, elem);
  }

}
