import { ClienteService } from './../../services/cliente.service';
import { ProfissionalService } from './../../services/profissional.service';
import { AuthUserServiceService } from './../../services/auth-user.service';
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

  user: Profissional | Cliente = new Profissional();
  rawLogin = { email: null, senha: null };

  constructor(private dataService: ProfissionalService, private router: Router, private route: ActivatedRoute,
    private clienteService: ClienteService) { }

  ngOnInit() {
    if (sessionStorage.length > 0) {
      this.router.navigate(["home/user"]);
    }
  }

  login() {
    // Procurar quem é o negão
    this.dataService.retrieveByEmail(this.rawLogin.email).subscribe(
      (res: any) => {
        console.log("É Profissional", res);
        sessionStorage.setItem('user_login', JSON.stringify(res.profissional));
        this.router.navigate(["home/user/projetos"]).then(() => { location.reload() });
        return;

      }, (error: any) => {
        this.clienteService.retrieveByEmail(this.rawLogin.email).subscribe(
          (res: any) => {
            if(res[0] == undefined || !res){
              console.log(res.cliente);
              return
            }
            console.log("É Cliente");
            console.log(res);

            sessionStorage.setItem('user_login', JSON.stringify(res[0]));
            this.router.navigate(["home/cliente/projetos"]).then(() => { location.reload() });
            return;
          }, (error: any) => {
            console.log("Usuário não encontrado", error);
          }
        )
      }
    );
  }

  onSubmit(registerForm: NgForm) {
    if (registerForm.invalid) {
      console.log("Campo inválido")
      return;
    }
    this.login();
  }
  
  toHome(){
    this.router.navigate(['home']);
  }
}
