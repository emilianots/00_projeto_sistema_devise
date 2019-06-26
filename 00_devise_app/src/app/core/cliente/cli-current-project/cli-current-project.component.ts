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
  selector: 'app-cli-current-project',
  templateUrl: './cli-current-project.component.html',
  styleUrls: ['./cli-current-project.component.css']
})
export class CliCurrentProjectComponent implements OnInit {

  projeto: Projeto = new Projeto();
  fase1: Fase1 = new Fase1();
  pessoas: Pessoa | any[];
  idProjeto: string= "";

  // Chat
  chat: Chat = new Chat();

  menuLateral: number = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private projetoService: ProjetoService, private fase1Service: Fase1Service,
    private chatService: ChatService) { }

  ngOnInit() {
    this.idProjeto = this.activatedRoute.snapshot.params['id'];

    //resgata o projeto e a fase do banco
    this.projetoService.retrieveById(this.idProjeto).subscribe(
      (res: Projeto)=>{
        this.projeto = res;
        console.log(1, this.projeto);

        this.chatService.retrieveById(res.chat).subscribe(
          (res2: Chat) =>{
            this.chat = res2;
            console.log("Chat lido", this.chat.msgs);
          }
        )

        this.fase1Service.retrieve(res.fase1).then(
          (res: Fase1)=>{
            this.fase1 = res;
            console.log(2, this.fase1);
            this.pessoas = res.pessoas;
          }
        )
      }
    )
  }

  msgStyle(id){
    if(id == this.projeto.idCliente){
      return {'msg-prof':'true'};
    } else{
      return {'msg-user':'true'};
    }
  }

  msgSend(msg){
    this.chat.msgs.push( { remet: this.projeto.idCliente, msg: msg } );
    this.chatService.update(this.chat).subscribe(
      (res3:Chat) => {
        this.chat = res3;
        console.log(this.chat);
      }
    )
  }

  toPanel(){
    this.router.navigate(['home/cliente/projetos']);
  }

  save(){
    this.projetoService.update(this.projeto._id, this.projeto).subscribe(
      (res4: any) => {
        console.log(res4);
      }
    )
  }

}