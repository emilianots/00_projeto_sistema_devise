import { Component, OnInit } from '@angular/core';
import { CardImagesService } from './card-images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  images: any[]

  constructor(private imagesService: CardImagesService) {

  }

  /* consultar() {
    this.imagesService.consultar().subscribe((res: any[]) => {
      this.images = res;
    })
  } */

  ngOnInit() {
    //this.consultar();
  }
}
