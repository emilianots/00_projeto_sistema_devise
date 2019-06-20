import { GeneralService } from './../../../services/general.service';
import { ProjetoService } from 'src/app/services/projeto.service';
import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/models/projeto';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Profissional } from 'src/app/models/profissional';

@Component({
  selector: 'app-register-project',
  templateUrl: './register-project.component.html',
  styleUrls: ['./register-project.component.css']
})
export class RegisterProjectComponent implements OnInit {

  projetoNovo: Projeto = new Projeto();
  user: Profissional = new Profissional();

  //para os paineis de registro;
  menuLateral: number = 2; //esse valor tem que estar em 0
  nescessidade: number = 0; //esse valor tem que estar em 0
  topografia: number = 1; //esse valor tem que estar em 0

  constructor(private router: Router, private projetoService: ProjetoService, private userService: GeneralService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user_login'));
    if (!this.user) {
      this.router.navigate(['login'])
      console.log(this.user)
    }
  }

  changeFaseOp(elem) {
    this.menuLateral = elem;
    //console.log(this.menuLateral);
  }
  changeNescOp(elem){
    this.nescessidade = elem;
  }
  changeTopoOp(elem){
    this.topografia = elem;
  }


  //voltar pro painel de projetos
  toPanel() {
    this.router.navigate(['home/user/projetos']);
  }


  //novo projeto
  newProjeto(registerForm: NgForm, tipoCasa, metragem) {
    if (registerForm.invalid) {
      console.log("Preencha os campos obrigatorio");
      return;
    }
    this.projetoNovo.tipoCasa = tipoCasa;
    this.projetoNovo.metragem = metragem;

    this.projetoService.register(this.projetoNovo).subscribe(
      (res: Projeto) => {
        let response = res;
        if (!response) {
          return;
        }

        this.userService.addProjetoId(this.user._id, response._id).subscribe(
          (res) => {
            console.log(2);
            console.log(res);
          }
        )
      }
    )

    this.userService.retrieveById(this.user._id).subscribe(
      (res: Profissional) => {
        console.log(3)
        console.log(res);
        this.user = res;
        sessionStorage.setItem('user_login', JSON.stringify(res));
      }
    )

    this.router.navigate(['home/user/projetos']).then(() => {
      location.reload();
    })
  }
}
