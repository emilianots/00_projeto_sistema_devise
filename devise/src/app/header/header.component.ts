import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  visible = true;
  @Output() isVisible = new EventEmitter();

  constructor() {

  }
  callForm() {
    this.isVisible.emit({valor: this.visible});
    this.visible ? this.visible = false : this.visible = true;
    //console.log(this.visible);
  }

}
