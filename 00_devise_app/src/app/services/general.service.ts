import { HttpClient } from '@angular/common/http';
import { Profissao } from './../models/profissao';
import { Profissional } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  urlImages: string = "http://localhost:3000/images"
  urlProfissionais: string = "http://localhost:3000/profissional"
  urlClientes: string = "http://localhost:3000/profissional"

  constructor(private httpCLiente: HttpClient) { }

  registerProfissional(profissional: Profissional){
    return this.httpCLiente.post(this.urlProfissionais, profissional);
  }

  getClientes(){
    return this.httpCLiente.get(this.urlImages);
  }

}
