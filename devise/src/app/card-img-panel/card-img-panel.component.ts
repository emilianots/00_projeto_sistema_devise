import { CardImagesService } from './../card-images.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-img-panel',
  templateUrl: './card-img-panel.component.html',
  styleUrls: ['./card-img-panel.component.css']
})
export class CardImgPanelComponent implements OnInit {
  @Input() imagePanel: any;
  constructor() { }


  ngOnInit() {
  }

}
