import { Profissional } from 'src/app/models/profissional';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  url: string = "http://localhost:3000/profissionais"

  constructor(private httpClient: HttpClient) { }

  register(profissional: Profissional): Observable<Profissional>{
    return this.httpClient.post<Profissional>(`${this.url}/register`, profissional);
  }

  list(){
    return this.httpClient.get(`${this.url}/list`);
  }

  retrieveById(id: number): Observable<Profissional>{
    return this.httpClient.get<Profissional>(`${this.url}/retrieve${id}`)
  }

  retrieveByLogin(login: string, senha: string){
    return this.httpClient.get(`${this.url}/retrieve/email/${login}/${senha}`);
  }
}
