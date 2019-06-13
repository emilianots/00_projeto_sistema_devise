import { GeneralService } from './../../../services/general.service';
import { ProjetoService } from './../../../services/projeto.service';
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

  constructor(private router: Router, private userService: GeneralService, private projetoService: ProjetoService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user_login'));
    if (!this.user) {
      console.log(this.user)
      this.router.navigate(['login'])
    }
  }

  nProjeto(novoProjeto: NgForm, tipoCosntrucao) {
    /* if(!novoProjeto.valid){
      console.log("Preencha todos os campos");
      return;
    } */
    this.atualProjeto.nome = novoProjeto.value.nomeProjeto;
    this.atualProjeto.descricao = novoProjeto.value.descricaoProjeto;
    this.atualProjeto.tipoCasa = tipoCosntrucao;
    this.atualProjeto.metragem = novoProjeto.value.metragem;
    this.atualProjeto.qtdComodos = novoProjeto.value.qtdComodos;
    
    this.projetoService.register(this.atualProjeto).subscribe(
      (res: Projeto | any)=>{
        let resposta = res;

        this.userService.addProjetoId(this.user._id, resposta._id).subscribe(
          (res: Profissional)=>{
          console.log(res);
          }
        )
        
      }
    )
    /* this.userService.addProjetoId(this.user._id, "5cfad151d975221e3e729d15").subscribe(
      (res: Profissional)=>{
        console.log(res.projetos);
      }
    ) */

  }

}
