import { Profissional } from './../../models/profissional';
import { Cliente } from './../../models/cliente';
import { GeneralService } from './../../services/general.service';

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css'],
  animations: []
})
export class HomeBodyComponent implements OnInit {

  //profissionais: Array<Profissional>;
  userProfissional: Profissional = new Profissional();

  constructor( private dataService: GeneralService, private router: Router) { }

  list(){
    this.dataService.list().subscribe(
      (res: Array<Profissional>)=>{
        //this.profissionais = res
        //console.log(res);
      }
    )
  }

  ngOnInit(){
    /* if(sessionStorage.length == 0){
      console.log("vazio");
      this.router.navigate(["login"]);
      return;
    }
    this.router.navigate(['home/user']) */
    /* let _user: Profissional = JSON.parse(sessionStorage.getItem("user_login"));
    //console.log(_user);
    if(!_user){
      //this.router.navigate(['login']);
      console.log("deu 1")
    }
    this.userProfissional = _user; */
    
  }
}
