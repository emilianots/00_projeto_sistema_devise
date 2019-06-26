import { ClienteService } from './../../services/cliente.service';
import { ProfissionalService } from './../../services/profissional.service';
import { Cliente } from './../../models/cliente';
import { Profissional } from './../../models/profissional';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profissional: Profissional = new Profissional();
  cliente: Cliente = new Cliente();
  rawLogin = { email: null, senha: null };

  constructor(private profissionalService: ProfissionalService, private router: Router,
    private clienteService: ClienteService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (sessionStorage.length > 0) {
      this.router.navigate(["home/user"]);
    }
  }

  login() {
    // Procurar quem é o negão
    this.profissionalService.retrieveByEmail(this.rawLogin.email).subscribe(
      (res: any) => {
        console.log("É Profissional", res);
        sessionStorage.setItem('user_login', JSON.stringify(res.profissional));
        console.log(res.profissional);
        this.router.navigate(["home/user/projetos"]).then(() => { location.reload() });
        return;

      }, (error: any) => {
        this.clienteService.retrieveByEmail(this.rawLogin.email).subscribe(
          (res: any) => {
            sessionStorage.setItem('user_login', JSON.stringify(res.cliente));
            console.log(res.cliente);
            this.router.navigate(["home/cliente/projetos"]).then(() => { location.reload() });
            return;
          }, (error: any) => {
            console.log("Usuário não encontrado", error);
          }
        )
      }
    );



    // this.profissionalService.retrieveByLogin(this.rawLogin.email, this.rawLogin.senha).subscribe(
    //   (res: any) => {
    //     if (res) {
    //       //console.log(res.profissional)
    //       sessionStorage.setItem('user_login', JSON.stringify(res.profissional));
    //       this.user = res;
    //       this.router.navigate(["home/user/projetos"]).then(() => { location.reload() });
    //       console.log("1");
    //       return;
    //     }
    //   }
    // )
  }

  onSubmit(registerForm: NgForm) {
    if (registerForm.invalid) {
      console.log("Campo inválido")
      return;
    }
    this.login();
  }

  toHome() {
    this.router.navigate(['home']);
  }
}
