import { Fase2 } from './../models/fases/fase2';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Fase2Service {

  url: string = "http://localhost:3000/fase2"

  constructor(private httpClient: HttpClient) { }

  register(fase: Fase2){
    return this.httpClient.post(`${this.url}/register`, fase);
  }

  update(id: string, fase: Fase2){
    return this,this.httpClient.put<Fase2>(`${this.url}/update/${id}`, fase);
  }

  retrieve(id:string){
    return this.httpClient.get(`${this.url}/retrieve/${id}`);
  }
}
