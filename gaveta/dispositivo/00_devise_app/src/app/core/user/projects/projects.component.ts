import { GeneralService } from './../../../services/general.service';
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

  constructor(private projetoService: ProjetoService, private profissionalService: GeneralService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.curentUser = JSON.parse(sessionStorage.getItem('user_login'));
    //console.log(this.curentUser);
    this.updateFront();
  }

  navigateTo(id: string){
    //console.log(id);
    this.router.navigate(['atualProjeto', id]);
  }

  toNewProject(){
    this.router.navigate(['novoProjeto']);
  }

  updateFront(){
    //console.log("atuali")
    if(!this.curentUser){
      this.router.navigate(['home']);
    }

    this.profissionalService.retrieveById(this.curentUser._id).subscribe(
      (res: any)=>{
        if(!res){
          return
        }
        this.curentUser = res;
        console.log(1, res);
        //console.log(res);

        for(let proj of this.curentUser.projetos){
          this.projetoService.retrieveById(proj).subscribe(
            (res: Projeto)=>{
              this.projetos.push(res);
              console.log(2, res);
              console.log(3, this.projetos);
            }
          )
        }
      }
    );
    
    
    //console.log(this.curentUser);
    console.log(3, this.projetos);
  }

}
