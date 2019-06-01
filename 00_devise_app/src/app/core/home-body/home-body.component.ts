import { Profissional } from './../../models/profissional';
import { Cliente } from './../../models/cliente';
import { GeneralService } from './../../services/general.service';

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {

  profissionais: Array<Profissional>;

  constructor( private dataService: GeneralService) { }

  list(){
    this.dataService.list().subscribe(
      (res: Array<Profissional>)=>{
        this.profissionais = res
        console.log(res);
      }
    )
  }

  ngOnInit(){
    this.list();
    console.log(this.profissionais);
  }
}
