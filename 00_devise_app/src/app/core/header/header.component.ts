import { Cliente } from './../../models/cliente';
import { Profissional } from './../../models/profissional';
import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit{

  user: Profissional | Cliente = null;

  constructor(private router: Router) {

  }

  ngOnInit(){
  }

  public goToHome():void{

    this.router.navigateByUrl("/home");
  }
  
}

$(function(){
  $(document).scroll(function(){
    var $nav = $(".header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  })
})
