import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { CardImgPanelComponent } from './card-img-panel/card-img-panel.component';
import { CardImagesService} from './card-images.service';
import { SingUpFormComponent } from './sing-up-form/sing-up-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeBodyComponent,
    CardImgPanelComponent,
    SingUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CardImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
