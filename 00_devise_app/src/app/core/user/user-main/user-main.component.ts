import { GeneralService } from './../../../services/general.service';
import { ProjetoService } from './../../../services/projeto.service';
import { Projeto } from './../../../models/projeto';
import { Cliente } from './../../../models/cliente';
import { Profissional } from 'src/app/models/profissional';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  onTab: number = 0;

  constructor(private router: Router, private userService: GeneralService, private projetoService: ProjetoService, private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user_login'));
    //console.log(this.user)
    this.userService.retrieveById(this.user._id);
    if (!this.user) {
      //console.log(this.user)
      this.router.navigate(['login']);
    }
    console.log(this.user) //SAPORRA TA RETORNANDO AGORA QUE EU DEI UM POPULATE NO BANCO CARAI

    console.log("User-main iniciou");
  }


  nProjeto(novoProjeto: NgForm, tipoCosntrucao) {
    if (!novoProjeto.valid) {
      console.log("Preencha todos os campos");
      return;
    }

    this.atualProjeto.nome = novoProjeto.value.nomeProjeto;
    this.atualProjeto.descricao = novoProjeto.value.descricaoProjeto;
    /* this.atualProjeto.fase1 = "";
    this.atualProjeto.fase2 = "";
    this.atualProjeto.fase3 = "";
    this.atualProjeto.fase4 = ""; */

    this.projetoService.register(this.atualProjeto).subscribe(
      //criando o projeto
      (res: Projeto | any) => {
        let resposta = res;

        //referenciando o id do projeto recem criado
        this.userService.addProjetoId(this.user._id, resposta._id).subscribe(
          /* (res: Profissional)=>{
          console.log(res);
          } */
        )
      }
    )
  }

  toProjects() {
    this.router.navigate(['projetos'], { relativeTo: this.route }); // IMPORTANTE!!!
    this.onTab = 0;
  }

  toEquipe(){
    this.router.navigate(['equipes'], {relativeTo: this.route}); // PARA EQUIPES
    this.onTab = 1;
  }

  toClientes(){
    this.onTab == 2;
  }

  toConfig(){
    this.onTab == 3
  }

  showPanel() {
    this.router.navigate(['home/user']);

  }

  addFase1() {

  }
}
