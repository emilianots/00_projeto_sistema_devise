import { Profissional } from './../../models/profissional';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  profissional: Profissional = new Profissional();


  constructor(private dataService: ProfissionalService, private route: Router) { 
    
  }

  ngOnInit() {
  }

  onSubmit(registerForm: NgForm){
    if(registerForm.invalid){
      console.log("Todos os campos são necessários");
      return
    }
        
    this.dataService.register(this.profissional).subscribe(
      (res: Profissional)=>{
        console.log(res._id)
      }
    )
  }
}
