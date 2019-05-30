import { Profissional } from './../../models/profissional';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  profissional: Profissional = new Profissional();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.profissional)
  }

}
