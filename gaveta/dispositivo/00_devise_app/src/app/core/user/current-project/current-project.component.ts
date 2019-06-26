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
  pessoas: Pessoa | any[];
  idProjeto: string= "";
  idUser: string;

  // Chat
  chat: Chat = new Chat();

  menuLateral: number = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private projetoService: ProjetoService, private fase1Service: Fase1Service,
              private chatService: ChatService) { }

  ngOnInit() {
    this.idProjeto = this.activatedRoute.snapshot.params['id']; // resgata um id passado pela url na rota  
    this.idUser = JSON.parse(sessionStorage.getItem('user_login'));

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

        this.fase1Service.retrieve(res.fase1).subscribe(
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
    if(id == this.idProjeto){
      return {'msg-prof':'true'};
    } else{
      return {'msg-user':'true'};
    }
  }

  msgSend(msg){
    this.chat.msgs.push( { remet: this.idProjeto, msg: msg } );
    this.chatService.update(this.chat).subscribe(
      (res3:Chat) => {
        console.log("deu bom", res3);
        this.chat = res3;
        console.log(this.chat);
      }
    )
  }

  toPanel(){
    this.router.navigate(['home/user/projetos']);
  }
}
