import { ClienteService } from './../../../services/cliente.service';
import { Projeto } from './../../../models/projeto';
import { Cliente } from './../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cli-user-main',
  templateUrl: './cli-user-main.component.html',
  styleUrls: ['./cli-user-main.component.css']
})
export class CliUserMainComponent implements OnInit {
  user: Cliente = null;
  atualProjeto: Projeto = new Projeto();
  projetos: Projeto[] = [];

  constructor(private router: Router, private clienteService: ClienteService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user_login'));
    // console.log(this.user)

    this.clienteService.retrieveById(this.user._id);
    
    if (!this.user) {
      this.router.navigate(['login']);
    }
    console.log("Cliente-main iniciou");
  }

  toProjects() {
    this.router.navigate(['projetos'], { relativeTo: this.route });
  }

  showPanel() {
    this.router.navigate(['home/user']);
  }

}

