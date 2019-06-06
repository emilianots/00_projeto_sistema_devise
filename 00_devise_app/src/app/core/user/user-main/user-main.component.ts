import { Cliente } from './../../../models/cliente';
import { Profissional } from 'src/app/models/profissional';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  user: Profissional = null;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user_login'));
    if(!this.user){
      this.router.navigate(['login'])
    }
    console.log(this.user.listaProjetos)
  }

}
