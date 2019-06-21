import { Fase1 } from './../models/fases/fase1';
import { Projeto } from './../models/projeto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  url: string = "http://localhost:3000/projetos";

  constructor(private httpClient: HttpClient) { }

  register(projeto: Projeto): Observable<Projeto>{
    return this.httpClient.post<Projeto>(`${this.url}/register`, projeto);
  }

  list(){
    return this.httpClient.get(`${this.url}/list`);
  }

  retrieveUserProjects(id:string){
    return this.httpClient.get<Projeto>(`${this.url}/retrieve/${id}`)
  }

  retrieveById(id: string): Observable<Projeto>{
    return this.httpClient.get<Projeto>(`${this.url}/retrieve/${id}`)
  }

  update(id: string, projeto: Projeto){
    return this.httpClient.put<Projeto>(`${this.url}/update/${id}`, projeto);
  }

  addFase1(idProjeto: string, fase1: Fase1){
    return this.httpClient.put(`${this.url}/novaFase/1/${idProjeto}`, fase1);
  }
}
