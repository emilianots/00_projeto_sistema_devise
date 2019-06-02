import { Profissional } from './../../models/profissional';
import { Cliente } from './../../models/cliente';
import { GeneralService } from './../../services/general.service';

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
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
    let _user: Profissional = JSON.parse(sessionStorage.getItem("user_login"));
    if(!_user){
      this.router.navigate(['login']);
    }
    this.userProfissional = _user;
  }
}
