import { ParteInterna } from './../../../models/fase1.detalhes/parteInterna';
import { ParteExterna } from './../../../models/fase1.detalhes/parteExterna';
import { Pessoa } from './../../../models/fase1.detalhes/pessoas';
import { Fase1Service } from './../../../services/fase-1.service';
import { Fase1 } from './../../../models/fases/fase1';
import { Projeto } from './../../../models/projeto';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjetoService } from 'src/app/services/projeto.service';

// Chat
import { Chat } from './../../../models/chat';
import { ChatService } from './../../../services/chat.service';

@Component({
  selector: 'app-current-project',
  templateUrl: './current-project.component.html',
  styleUrls: ['./current-project.component.css']
})
export class CurrentProjectComponent implements OnInit {

  projeto: Projeto = new Projeto();
  fase1: Fase1 = new Fase1();
  fase1Panel: boolean = false;


  pessoas: Pessoa | any[];
  externo: ParteExterna [] = []
  interno: ParteInterna[] = [];

  parteExterna: ParteExterna = new ParteExterna();
  parteInterna: ParteInterna = new ParteInterna();

  idProjeto: string = "";
  idUser: string;

  pessoa: Pessoa = new Pessoa();


  // Chat
  chat: Chat = new Chat();

  addClienteBtn: boolean = true;

  menuLateral: number = 1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private chatService: ChatService,
    private projetoService: ProjetoService, private fase1Service: Fase1Service) { }

  ngOnInit() {
    this.idProjeto = this.activatedRoute.snapshot.params['id']; // resgata um id passado pela url na rota  
    this.idUser = JSON.parse(sessionStorage.getItem('user_login'));

    //resgata o projeto e a fase do banco
    this.projetoService.retrieveById(this.idProjeto).subscribe(
      (res: Projeto) => {
        this.projeto = res;
        console.log(1, this.projeto);

        this.chatService.retrieveById(res.chat).subscribe(
          (res2: Chat) => {
            this.chat = res2;
            console.log("Chat lido", this.chat.msgs);
          }
        )
        if (this.projeto.fase1 == undefined || this.projeto.fase1 == null) {
          this.fase1Panel = false;
          return;
        }

        this.fase1Service.retrieve(res.fase1).then(
          (res: Fase1)=>{
            if(res == undefined){
              return;
            }
            this.fase1 = res;
            this.pessoas = res.pessoas;
            this.externo = res.externo;
            this.interno = res.interno;
          }
        )
      }
    )

    console.log("registrar projetos iniciou");
    this.fase1.pessoas = [];
    this.fase1.interno = [];
    this.fase1.externo = [];
    //this.projetoCreated = JSON.parse(localStorage.getItem("nProjeto"));
    //console.log(this.projetoCreated);

    //this.pessoa.tipo = "cu"
    //this.pessoas.push(this.pessoa);
    //this.externo.push(this.parteExterna);
    this.interno.push(new ParteInterna());

  }

  addFase1(){
    if (this.fase1.externo.length == 0) {
      console.log("Partes externas vazia")
    }
    if (this.fase1.interno.length == 0) {
      console.log("Partes internas vazia") // verificando se foi adicionado elementos nas listas da fase1
    }
    if (this.fase1.pessoas.length == 0) {
      console.log("Pessoas vazia")
    }

    if (this.fase1._id != undefined) {
      console.log("fase não no banco")
    }

    if(this.fase1._id == undefined){
      console.log('Sem id')
      this.fase1Service.register(this.fase1).then(
        res=>{
          if(res == undefined){
            console.log("Erro 1", res);
            
            this.projetoService.addFase1(this.projeto._id, this.fase1).then(
              (res: Projeto)=>{
                if(res == undefined){
                  console.log("Erro 2", res);
                  return;
                }
                this.projeto = res;
                console.log("projeto atualizado\n",this.projeto);
              }
            )
            return;
          }
          this.fase1 = res;
          console.log("fase adicionada\n",this.fase1);
        }
      )
      /* this.fase1Service.register(this.fase1).subscribe(
        (res: Fase1) => {
          this.fase1 = res;
          localStorage.setItem('fase1_id', res._id);
          setTimeout(() => {
            this.projetoService.addFase1(this.projeto._id, res).subscribe(
              (res: Fase1) => {
                console.log(2, res);
                alert("Os dados foram salvos com sucesso!")
              }
            )
          }, 200);
          console.log(1, res);
        }
      ) */
      return
    }
  /*   console.log(this.fase1);
    this.fase1Service.register(this.fase1).subscribe(
      res=>{
        console.log(res);
        
      }
    ) */
  }

  addMorador(){
    if (this.pessoa.tipo == undefined || this.pessoa.tipo.length == 0) {
      console.log("Tipo de pessoa vazio");
      return;
    }
    //this.pessoas.push(this.pessoa);
    //console.log(this.pessoas);
    //this.pessoa = new Pessoa();
    console.log(this.fase1);
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

  msgStyle(id) {
    if (id == this.idProjeto) {
      return { 'msg-prof': 'true' };
    } else {
      return { 'msg-user': 'true' };
    }
  }

  msgSend(msg) {
    this.chat.msgs.push({ remet: this.idProjeto, msg: msg });
    this.chatService.update(this.chat).subscribe(
      (res3: Chat) => {
        console.log("deu bom", res3);
        this.chat = res3;
        console.log(this.chat);
      }
    )
  }

  toPanel() {
    this.router.navigate(['home/user/projetos']);
  }

  toggleAddCliForm() {
    this.addClienteBtn ? this.addClienteBtn = false : this.addClienteBtn == true;
  }
}
