import { Cliente } from './../../models/cliente';
import { Profissional } from './../../models/profissional';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Profissional | Cliente = new Profissional()

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.user);
  }

}
