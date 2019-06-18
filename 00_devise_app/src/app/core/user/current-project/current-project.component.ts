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

  projeto: Projeto = null

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private projetoService: ProjetoService
    ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id']; // resgata um id passado pela url na rota

    this.projetoService.retrieveById(id).subscribe(
      (res: Projeto)=>{
        this.projeto = res;
      }
    )
  }

  toHome(){
    this.router.navigate(['home/user/projetos']);
  }
}
