import { Fase1 } from './../models/fases/fase1';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Fase1Service {

  url: string = "http://localhost:3000/fase1"

  constructor(private httpClient: HttpClient) { }

  async register(fase: Fase1){
    let nFase: Fase1 = new Fase1();
    await this.httpClient.post<Fase1>(`${this.url}/register`, fase).toPromise().then(
      (res: Fase1)=>{
        nFase = res;
      }
    )
    return nFase;
  }

   async update(id: string, fase: Fase1){
     let nFase: Fase1 = new Fase1();
    await this.httpClient.put<Fase1>(`${this.url}/update/${id}`, fase).toPromise().then(
      (res: Fase1)=>{
        nFase = res;
      }
    )
    return nFase;
  }

  async retrieve(id:string){
    let nFase: Fase1;
    await this.httpClient.get(`${this.url}/retrieve/${id}`).toPromise().then(
      (res: Fase1)=>{
        nFase = res
      }
    )
    return nFase;
  }
}
