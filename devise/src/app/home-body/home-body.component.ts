import { CardImagesService } from './../card-images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {

  images: any;
  
  constructor(private imageRequest: CardImagesService) { }

  request(){
    this.imageRequest.consultar().subscribe((res:any) => {
      this.images = res[0]; 
      //parece que a resposta da requisição vem com um array com um objeto dentro

    })
  }

  ngOnInit(){
    this.request();
  }
}/* 
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.c-b-right');
const prevBtn = document.querySelector('.c-b-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect().width;
console.log(slideSize) */
