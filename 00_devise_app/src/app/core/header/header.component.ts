import { Profissao } from './../../models/profissao';
import { Cliente } from './../../models/cliente';
import { Profissional } from './../../models/profissional';
import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit{

  user: Profissional | Cliente;

  constructor(private router: Router) {

  }

  ngOnInit(){
    let _user: Profissional | Cliente = JSON.parse(sessionStorage.getItem("user_login"));
    this.user = _user;
  }

  public logout(){
    this.user = null;
    sessionStorage.clear();
    this.router.navigate(['login']).then(()=>{location.reload()});
  }
}

