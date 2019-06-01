import { HttpClient } from '@angular/common/http';
import { Profissao } from './../models/profissao';
import { Profissional } from './../models/profissional';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  urlProfissionais: string = "http://localhost:3000/profissionais"

  constructor(private httpCLiente: HttpClient) { }

  registerProfissional(profissional: Profissional){
    return this.httpCLiente.post(`${this.urlProfissionais}/register`, profissional);
  }

  list(){
    return this.httpCLiente.get(`${this.urlProfissionais}/list`);
  }

  retrieveByEmail(email: string){
    return this.httpCLiente.get(`${this.urlProfissionais}/retrieve/email/${email}`);
  }

}
