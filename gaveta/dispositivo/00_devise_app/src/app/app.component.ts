import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  images: any[]
  isHomeVisible: boolean;

  constructor() {

  }

  /* consultar() {
    this.imagesService.consultar().subscribe((res: any[]) => {
      this.images = res;
    })
  } */
  hideBody(evento: any){
    this.isHomeVisible = evento.valor;
  }

  ngOnInit() {
    this.isHomeVisible = true;
    //this.consultar();
  }
}
