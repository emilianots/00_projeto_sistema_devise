import { AppRoutingModule } from './../app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SingUpFormComponent } from './sing-up-form/sing-up-form.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, HomeBodyComponent, SingUpFormComponent, FooterComponent],
  exports: [
    HeaderComponent,
    HomeBodyComponent,
    SingUpFormComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class CoreModule { }
