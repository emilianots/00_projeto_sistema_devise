import { GeneralService } from './../../services/general.service';
import { Cliente } from './../../models/cliente';
import { Profissional } from './../../models/profissional';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Profissional | Cliente = new Profissional();
  rawLogin = {email: null, senha: null};

  constructor(private dataService: GeneralService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.dataService.retrieveByEmail(this.rawLogin.email).subscribe(
      (res: Array<Profissional>)=>{
        //this.user = res[0];
        if(res.length>0){
          if(res[0].senha == this.rawLogin.senha){
            sessionStorage.setItem("user_login", JSON.stringify(res[0]));
            console.log(sessionStorage);
            this.user = res[0];
            this.router.navigate(["home"]);
            return;
          }
          console.log("Usuário ou senha inválidos!");
          return;
        }
      }
    )
    
  }

  onSubmit(registerForm: NgForm){
    //console.log(this.user);
    
    
    if(registerForm.invalid){
      console.log("Campo inválido")
      return;
    }
    //console.log(this.rawLogin) 
    this.login();  
  }

}
