import { ClienteService } from './../../../services/cliente.service';
import { Cliente } from './../../../models/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/models/projeto';
import { ProjetoService } from 'src/app/services/projeto.service';
import { RelativeInjectorLocationFlags } from '@angular/core/src/render3/interfaces/injector';

@Component({
  selector: 'app-cli-projects',
  templateUrl: './cli-projects.component.html',
  styleUrls: ['./cli-projects.component.css']
})
export class CliProjectsComponent implements OnInit {

  curentUser: Cliente = null;
  projetos: Projeto[] = [];

  constructor(private clienteService: ClienteService, private projetoService: ProjetoService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.curentUser = JSON.parse(sessionStorage.getItem('user_login'));
    console.log(this.curentUser);
    this.updateFront();
  }

  navigateTo(id: string){
    this.router.navigate(['projeto', id]);
  }

  updateFront(){
    if(!this.curentUser){
      this.router.navigate(['home']);
    }

    this.projetoService.retrieveClienteProjects(this.curentUser._id).subscribe(
      (res: any)=>{
        this.projetos = res;
        console.log(1, res);
      }, (error:any) => {
        console.log(error);
      }     
    );
  }

}