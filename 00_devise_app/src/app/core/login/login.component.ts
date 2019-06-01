import { GeneralService } from './../../services/general.service';
import { Cliente } from './../../models/cliente';
import { Profissional } from './../../models/profissional';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Profissional | Cliente = new Profissional();
  rawLogin = {email: null, senha: null};

  constructor(private dataService: GeneralService) { }

  ngOnInit() {
  }

  login(){
    this.dataService.retrieveByEmail(this.rawLogin.email).subscribe(
      (res: Array<Profissional>)=>{
        this.user = res[0];
        console.log(this.user);
      }
    )
    
  }

  onSubmit(){
    //console.log(this.user);
    console.log(this.rawLogin) 
    this.login();  
  }

}
