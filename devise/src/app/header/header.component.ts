import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  visible: boolean;
  @Output() isVisible = new EventEmitter();

  constructor() {

  }

  toMain() {
    if(!this.visible) return;
    this.visible = false;
    this.isVisible.emit({valor: this.isVisible});
    console.log(this.visible);
  }

  callForm() {
    this.isVisible.emit({ valor: this.visible });
    this.visible ? this.visible = false : this.visible = true;
    console.log('%c' + this.visible, 'color: green');

  }

  ngOnInit(){
    this.visible = false;
  }

}
