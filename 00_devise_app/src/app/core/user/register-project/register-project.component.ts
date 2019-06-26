import { Fase2Service } from './../../../services/fase-2.service';
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
import { Fase2 } from 'src/app/models/fases/fase2';

// Chat
import { Chat } from './../../../models/chat';
import { ChatService } from './../../../services/chat.service';


@Component({
  selector: 'app-register-project',
  templateUrl: './register-project.component.html',
  styleUrls: ['./register-project.component.css']
})
export class RegisterProjectComponent implements OnInit {

  chat: Chat = new Chat();

  projetoNovo: Projeto = new Projeto();
  projetoId: string;
  user: Profissional = new Profissional();

  projetoCreated: Projeto;

  addClienteBtn: boolean = true;

  fase1: Fase1 = new Fase1();
  fase2: Fase2 = new Fase2();

  pessoas: Pessoa[] = [];
  externo: ParteExterna[] = [];
  interno: ParteInterna[] = [];

  //para os paineis de registro;
  menuLateral: number = 2; //esse valor tem que estar seu boco
  nescessidade: number = 0; //esse valor tem que estar em 0
  topografia: number = 0; //esse valor tem que estar em 0

  //butao: boolean = true;
  pessoa: Pessoa = new Pessoa();
  parteExterna: ParteExterna = new ParteExterna();
  parteInterna: ParteInterna = new ParteInterna();


  constructor(private router: Router, private projetoService: ProjetoService, private userService: GeneralService,
    private chatService: ChatService, private fase1Service: Fase1Service, private fase2Service: Fase2Service) { }

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
    this.projetoNovo;

    //this.pessoa.tipo = "cu"
    //this.pessoas.push(this.pessoa);
    //this.externo.push(this.parteExterna);
    this.interno.push(new ParteInterna());


  }

  //voltar pro painel de projetos
  toPanel() {
    this.router.navigate(['home/user/projetos']);
  }

  toggleAddCliForm() {
    this.addClienteBtn ? this.addClienteBtn = false : this.addClienteBtn = true;
  }


  //novo morador na lista/
  addMorador() {
    if (this.pessoa.tipo == undefined || this.pessoa.tipo.length == 0) {
      console.log("Tipo de pessoa vazio");
      return;
    }
    /* this.pessoas.push(this.pessoa);
    console.log(this.pessoas);
    this.pessoa = new Pessoa(); */
    this.fase1.pessoas.push(this.pessoa);
    console.log(this.fase1.pessoas);
    this.pessoa = new Pessoa();
  }

  rmMorador(elem) {
    let index = this.fase1.pessoas.findIndex(x => x.tipo == elem);
    this.fase1.pessoas.splice(index, 1);
    //console.log(index);
  }

  addPExterna() {
    if (this.parteExterna.tipo == undefined || this.parteExterna.tipo.length == 0) {
      console.log("TIpo de parte externa vazio");
      return;
    }
    //this.externo.push(this.parteExterna);
    this.fase1.externo.push(this.parteExterna);
    console.log(this.fase1.externo);
    this.parteExterna = new ParteExterna();
  }

  rmPExterna(elem) {
    let index = this.fase1.externo.findIndex(x => x.tipo == elem);
    this.fase1.externo.splice(index, 1);
    //console.log(index);
  }

  addPInterna() {
    if (this.parteInterna.tipo == undefined || this.parteInterna.tipo.length == 0) {
      console.log("TIpo de parte externa vazio");
      return;
    }
    //this.externo.push(this.parteExterna);
    this.fase1.interno.push(this.parteInterna);
    console.log(this.fase1.interno);
    this.parteInterna = new ParteInterna();
  }

  rmPInterna(elem) {
    let index = this.fase1.interno.findIndex(x => x.tipo == elem);
    this.fase1.interno.splice(index, 1);
    //console.log(index);
  }


  //novo projeto
  newProjeto(registerForm: NgForm, tipoCasa: string, metragem) {
    if (registerForm.invalid) {
      console.log("Preencha os campos obrigatorio");
      alert("Preencha todos os campos!")
      return;
    }

    console.log(this.projetoNovo);


    // Criando primeiro o chat
    this.chatService.registerChat(this.chat).subscribe(
      (res: Chat) => {
        this.projetoNovo.chat = res._id;
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


            setTimeout(() => {
              this.userService.addProjetoId(this.user._id, response._id).subscribe(
                (res) => {
                  if (!res) {
                    console.log("erro ao atribuir projeto ao usuario! 2");
                    return;
                  }
                  console.log("atribuindo id");
                  console.log(2);

                  this.menuLateral = 1;
                  //alert("O projeto: " + response.nome + " foi criado com sucesso!");
                  //console.log(res);
                }
              );
            }, 200);

            setTimeout(() => {
              this.userService.retrieveById(this.user._id).subscribe(
                (res: Profissional) => {
                  console.log(3)
                  //console.log(res);
                  this.user = res;
                  sessionStorage.setItem('user_login', JSON.stringify(this.user));
                }
              )
            }, 1000);
          }
        )
      }
    )

    /* this.router.navigate(['home/user/projetos']).then(() => {
      location.reload();
    }) */
  }
  addMoradia() {
    /* if (!this.projetoCreated) {
      console.log("projeto vazio!");
      return;
    } */

    if (this.fase1.externo.length == 0) {
      //console.log("Partes externas vazia")
    }
    if (this.fase1.interno.length == 0) {
      //console.log("Partes internas vazia") // verificando se foi adicionado elementos nas listas da fase1
    }
    if (this.fase1.pessoas.length == 0) {
      //console.log("Pessoas vazia")
    }

    if (this.fase1._id != undefined) {
      console.log("fase não no banco")
    }

    //console.log(this.fase1);    
    if (this.fase1._id == undefined) {
      console.log("adding phase");
      console.log(this.projetoCreated);
      this.fase1Service.register(this.fase1).then(
        res => {
          console.log(1, res);
          this.fase1 = res;
          this.projetoService.addFase1(this.projetoCreated._id, this.fase1).then(
            (res) => {
              console.log(22, this.projetoCreated, res);
              return;
            }
          )
        }
      )

      /* this.fase1Service.register(this.fase1).subscribe(
        (res: Fase1) => {
          this.fase1 = res;
          localStorage.setItem('fase1_id', res._id);
          setTimeout(() => {
            this.projetoService.addFase1(this.projetoCreated._id, res).subscribe(
              (res: Fase1) => {
                console.log(2, res);
                alert("Os dados foram salvos com sucesso!")
              }
            )
          }, 200);
          console.log(1, res);
        }
      ) */
      console.log("fim!");
      return;
    }

    this.fase1Service.update(this.fase1._id, this.fase1).then(
      (res: Fase1) => {
        console.log("atualizou fase")
        console.log(res);
        this.fase1 = res;
        alert("Os dados foram atualizados com sucesso!");

      }
    )
  }

  addTopografia() {
    if (this.fase2._id == undefined) {
      console.log("dub");
      this.fase2Service.register(this.fase2).subscribe(
        (res: Fase2) => {
          this.fase2 = res;
          localStorage.setItem('fase2_id', res._id)

          console.log(1, res);
          this.projetoService.addFase2(this.projetoCreated._id, res).subscribe(
            (res: Fase1) => {
              console.log(2, res);
              alert("Os dados foram salvos com sucesso!")
            }
          )
        }
      )
      return;
    }

    this.fase2Service.update(this.fase2._id, this.fase2).subscribe(
      (res: Fase2) => {
        console.log("atualizaou fase")
        console.log(res);
        this.fase2 = res;
        alert("Os dados foram atualizados com sucesso!");

      }
    )
  }
}
