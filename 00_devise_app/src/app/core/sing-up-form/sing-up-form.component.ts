import { GeneralService } from './../../services/general.service';
import { Component, OnInit, Input } from '@angular/core';
import { Profissional } from 'src/app/models/user';

@Component({
  selector: 'app-sing-up-form',
  templateUrl: './sing-up-form.component.html',
  styleUrls: ['./sing-up-form.component.css']
})
export class SingUpFormComponent implements OnInit {

  private profissional = {};

  constructor(private dataService: GeneralService) { }


  registerProfissional(profissional: Profissional) {
    this.dataService.registerProfissional(profissional);
  }

  ngOnInit() {

  }

}
