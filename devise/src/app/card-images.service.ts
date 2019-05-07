import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CardImagesService implements OnInit {
  url: string = 'http://localhost:3000/images/'
  constructor(private http: HttpClient) { }


  consultar(){
    return this.http.get(this.url)
  }


  adicionar(image: any){
    return this.http.post(this.url, image);
  }

  ngOnInit(){
    
  }
}
