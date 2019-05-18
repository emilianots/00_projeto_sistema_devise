import { Profissional } from './../../models/user';
import { Cliente } from './../../models/cliente';
import { GeneralService } from './../../services/general.service';

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {

  private clientes: Array<Cliente>;

  constructor( private dataService: GeneralService) { }

  list(){
    this.dataService.getClientes().subscribe(
      (res: any) => {
        this.clientes = res;
      }
    )
  }

  ngOnInit(){
    this.list();
    console.log(this.clientes)
  }
}
