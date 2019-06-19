import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Profissional } from 'src/app/models/profissional';
import { Projeto } from 'src/app/models/projeto';
import { ProjetoService } from 'src/app/services/projeto.service';
import { RelativeInjectorLocationFlags } from '@angular/core/src/render3/interfaces/injector';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  curentUser: Profissional = null;
  projetos: Projeto[] = [];

  constructor(private projetoService: ProjetoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.updateFront();
    console.log("iniciou");
  }

  navigateTo(id: string){
    console.log(id);
    this.router.navigate(['atualProjeto', id], {relativeTo: this.route});
  }

  toNewProject(){
    this.router.navigate(['novoProjeto'], {relativeTo: this.route});
  }

  updateFront(){
    this.curentUser = JSON.parse(sessionStorage.getItem('user_login'));
    for(let proj of this.curentUser.projetos){
      this.projetoService.retrieveById(proj).subscribe(
        (res: Projeto)=>{
          this.projetos.push(res);
          //console.log(res);
        }
      )
    }
    
    console.log(this.curentUser);
   /*  this.projetoService.retrieveById('5d0265a13418f958d355f902').subscribe(
      (res: Projeto)=>{
      }
    ) */
    console.log(this.projetos);
  }

}
