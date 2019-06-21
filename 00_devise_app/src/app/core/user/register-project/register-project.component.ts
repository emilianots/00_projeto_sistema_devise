import { Fase1Service } from './../../../services/fase-1.service';
import { ParteInterna } from './../../../models/fase1.detalhes/parteInterna';
import { Fase1 } from './../../../models/fases/fase1';
import { Pessoa } from './../../../models/fase1.detalhes/pessoas';
import { GeneralService } from './../../../services/general.service';
import { ProjetoService } from 'src/app/services/projeto.service';
import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/models/projeto';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Profissional } from 'src/app/models/profissional';
import { ParteExterna } from 'src/app/models/fase1.detalhes/parteExterna';

@Component({
  selector: 'app-register-project',
  templateUrl: './register-project.component.html',
  styleUrls: ['./register-project.component.css']
})
export class RegisterProjectComponent implements OnInit {

  projetoNovo: Projeto = new Projeto();
  projetoId: string;
  user: Profissional = new Profissional();

  projetoCreated: Projeto;

  fase1: Fase1 = new Fase1();
  fase1Id: string = "-";
  pessoas: Pessoa[] = [];
  externo: ParteExterna[] = [];
  interno: ParteInterna[] = [];

  //para os paineis de registro;
  menuLateral: number = 1; //esse valor tem que estar em 0
  nescessidade: number = 2; //esse valor tem que estar em 0
  topografia: number = 0; //esse valor tem que estar em 0

  constructor(private router: Router, private projetoService: ProjetoService, private userService: GeneralService,
    private faseService: Fase1Service) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user_login'));
    if (!this.user) {
      this.router.navigate(['login'])
      //console.log(this.user)
      return;
    }


    console.log("registrar projetos iniciou");
    this.fase1.pessoas = [];
    this.fase1.interno = [];
    this.fase1.externo = [];
    this.projetoCreated = JSON.parse(localStorage.getItem("nProjeto"));
    console.log(this.projetoCreated);

  }

  //voltar pro painel de projetos
  toPanel() {
    this.router.navigate(['home/user/projetos']);
  }

  //novo projeto
  newProjeto(registerForm: NgForm, tipoCasa: string, metragem) {
    /* if (registerForm.invalid) {
      console.log("Preencha os campos obrigatorio");
      return;
    } */
    this.projetoNovo.tipoCasa = tipoCasa;
    this.projetoNovo.metragem = metragem;

    console.log(this.projetoNovo);


    //abaixo a adicao de projeto ao usuario
    this.projetoService.register(this.projetoNovo).subscribe(
      (res: Projeto) => {

        let response = res
        this.projetoCreated = res;
        this.projetoId = res._id;
        console.log("adicionando projeto");
        console.log(1);

        localStorage.setItem('nProjeto', JSON.stringify(res));

        if (!response) {
          console.log("erro ao criar projeto! 1");
          return;
        }

        this.userService.addProjetoId(this.user._id, response._id).subscribe(
          (res) => {
            if (!res) {
              console.log("erro ao atribuir projeto ao usuario! 2");
              return;
            }
            console.log("atribuindo id");
            console.log(2);
            //console.log(res);
          }
        );

        this.userService.retrieveById(this.user._id).subscribe(
          (res: Profissional) => {
            console.log(3)
            //console.log(res);
            this.user = res;
            sessionStorage.setItem('user_login', JSON.stringify(this.user));
          }
        )
      }
    )

    /* this.router.navigate(['home/user/projetos']).then(() => {
      location.reload();
    }) */
  }
  addMoradia(clima, qtdPessoas, freqUso) {
    if (!this.projetoCreated) {
      console.log("projeto vazio!");
      //return;
    }
    //console.log(clima, qtdPessoas, freqUso);
    this.fase1.clima = clima;
    this.fase1.qtdPessoas = qtdPessoas,
      this.fase1.freqUso = freqUso;
    //console.log(this.fase1);

    if (this.pessoas.length > 0) {
      this.fase1.pessoas.push(this.pessoas);
      this.pessoas = [];

    }
    if (this.externo.length > 0) {
      this.fase1.externo.push(this.externo);
      this.externo = [];
    }
    if (this.interno.length > 0) {
      this.fase1.interno.push(this.interno);
      this.interno = [];
    }
    console.log(this.fase1);
    //console.log(this.fase1);    
    if(this.fase1Id == "-"){
      console.log("dub");
      this.faseService.register(this.fase1).subscribe(
        (res: Fase1) => {
          this.fase1 = res;
          this.fase1Id = res._id;
  
          console.log(1, res);
          this.projetoService.addFase1(this.projetoCreated._id, res).subscribe(
            (res: Fase1) => {
              console.log(2, res);
            }
          )
        }
      )
      return;
    }

    this.faseService.update(this.fase1Id, this.fase1).subscribe(
      (res: Fase1)=>{
        console.log("atualizaou fase")
        console.log(res);
        this.fase1 = res;
      }
    )
  }

  addExterno() {
    console.log(this.fase1);
  }

  addPessoa() {
    this.pessoas.push(new Pessoa());
    //this.fase1.pessoas.push(new Pessoa());
  }

  addInternoItem() {
    //this.fase1.interno.push(new ParteInterna());
    this.interno.push(new ParteExterna())
  }

  addExternoItem() {
    //this.fase1.externo.push(new ParteExterna())
    this.externo.push(new ParteExterna());
  }

}
