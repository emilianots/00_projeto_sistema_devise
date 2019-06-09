import { Projeto } from './../../../models/projeto';
import { Cliente } from './../../../models/cliente';
import { Profissional } from 'src/app/models/profissional';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TipoConstrucao } from 'src/app/models/tipoConstrucao';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  user: Profissional = null;
  atualProjeto: Projeto = new Projeto();
  projetos: Projeto[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user_login'));
    if(!this.user){
      console.log(this.user)
      this.router.navigate(['login'])
    }
    console.log(this.atualProjeto);
  }

  nProjeto(novoProjeto: NgForm){
    console.log(novoProjeto.value);
  }

}
