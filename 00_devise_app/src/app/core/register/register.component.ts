import { GeneralService } from './../../services/general.service';
import { Profissional } from './../../models/profissional';
import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../../models/cliente';
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

  cliente: Cliente = new Cliente();
  profissional: Profissional = new Profissional();

  constructor(private dataService: ProfissionalService, private router: Router,
    private clienteService: ClienteService, private profissionalService: GeneralService) { 
    
  }

  ngOnInit() {
  }

  onSubmitProf(registerForm: NgForm){
    if(registerForm.invalid){
      console.log("Todos os campos são necessários");
      return
    }
        
    this.dataService.register(this.profissional).subscribe(
      (res: Profissional)=>{
        console.log(res._id)
        this.profissionalService.retrieveById(res._id).subscribe(
          (res)=>{
            sessionStorage.setItem("user_login", JSON.stringify(res));
            this.router.navigate(['home/user/projetos']).then(
              ()=>{location.reload()}
            );
          }
        )
      
      }
    )
  }

  onSubmitCli(registerForm: NgForm){
    if(registerForm.invalid){
      console.log("Todos os campos são necessários");
      return
    }
        
    this.clienteService.registerCliente(this.cliente).subscribe(
      (res: Cliente)=>{
        console.log(res._id)
        this.clienteService.retrieveById(res._id).subscribe(
          (res)=>{
            sessionStorage.setItem("user_login", JSON.stringify(res));
            this.router.navigate(['home/cliente/projetos']).then(
              ()=>{location.reload()}
            );
          }
        )
      
      }
    )
  }
  toHome(){
    this.router.navigate(['home']);
  }
}