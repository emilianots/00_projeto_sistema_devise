import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sing-up-form',
  templateUrl: './sing-up-form.component.html',
  styleUrls: ['./sing-up-form.component.css']
})
export class SingUpFormComponent implements OnInit {
  @Input() formVisible: boolean;
  constructor() { }

  show(){
    
  }

  ngOnInit() {
    this.formVisible = false;
  }

}
