import { GeneralService } from './general.service';
import { Profissional } from '../models/profissional';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUserServiceService {

  private userBehaviorSubject: BehaviorSubject<Profissional>
  private userObservable: Observable<Profissional>
  constructor(private route: Router, private profissionalService: GeneralService) {
    
    this.userBehaviorSubject = new BehaviorSubject<Profissional>(JSON.parse(sessionStorage.getItem('user_login')));
    this.userObservable = this.userBehaviorSubject.asObservable()
  }

  login(login: string, senha: string){
    this.profissionalService.retrieveByEmail(login, senha).subscribe(
      (res:Profissional[])=>{
        if(res.length > 0){
          if(res[0].senha == senha){
            sessionStorage.setItem('user_login', JSON.stringify(res[0]));
            this.userBehaviorSubject.next(res[0]);
            this.route.navigate(['home/user']);
          }else{
            console.log("Usuario ou senha inválido 1");
          }
        } else{
          console.log("usuario ou senha invalidos 2");
        }
      }
    )
  }
  logout(){
    sessionStorage.removeItem('user_login');
    this.userBehaviorSubject.next(null);
    this.route.navigate(['login']);
  }
}
