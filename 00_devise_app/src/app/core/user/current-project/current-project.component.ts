import { Pessoa } from './../../../models/fase1.detalhes/pessoas';
import { Fase1Service } from './../../../services/fase-1.service';
import { Fase1 } from './../../../models/fases/fase1';
import { Projeto } from './../../../models/projeto';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjetoService } from 'src/app/services/projeto.service';

@Component({
  selector: 'app-current-project',
  templateUrl: './current-project.component.html',
  styleUrls: ['./current-project.component.css']
})
export class CurrentProjectComponent implements OnInit {

  projeto: Projeto = new Projeto();
  fase1: Fase1 = new Fase1();
  pessoas: Pessoa | any[];

  menuLateral: number = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private projetoService: ProjetoService, private fase1Service: Fase1Service) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id']; // resgata um id passado pela url na rota

    //resgata o projeto e a fase do banco
    this.projetoService.retrieveById(id).subscribe(
      (res: Projeto)=>{
        this.projeto = res;
        console.log(1, this.projeto);

        /* this.fase1Service.retrieve(res.fase1).subscribe(
          (res: Fase1)=>{
            this.fase1 = res;
            console.log(2, this.fase1);
            this.pessoas = res.pessoas;
          }
        ) */
      }
    )

  }

  toPanel(){
    this.router.navigate(['home/user/projetos']);
  }
}
