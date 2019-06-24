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

  constructor(private dataService: ProfissionalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (sessionStorage.length > 0) {
      this.router.navigate(["home/user"]);
    }
  }

  login() {
    this.dataService.retrieveByLogin(this.rawLogin.email, this.rawLogin.senha).subscribe(
      (res: any) => {
        if (res) {
          //console.log(res.profissional)
          sessionStorage.setItem('user_login', JSON.stringify(res.profissional));
          this.user = res;
          this.router.navigate(["home/user/projetos"]).then(() => { location.reload() });
          console.log("1");
          return;
        }
      }
    )
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
