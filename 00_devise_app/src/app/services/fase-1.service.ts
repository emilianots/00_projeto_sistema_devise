import { Fase1 } from './../models/fases/fase1';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Fase1Service {

  url: string = "http://localhost:3000/fase1"

  constructor(private httpClient: HttpClient) { }

  register(fase: Fase1){
    return this.httpClient.post<Fase1>(`${this.url}/register`, fase);
  }
  
  update(id: string, fase: Fase1){
    return this,this.httpClient.put<Fase1>(`${this.url}/update/${id}`, fase);
  }
}
