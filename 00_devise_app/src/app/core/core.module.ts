import { Cliente } from './../models/cliente';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './../app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeBodyComponent } from './home-body/home-body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ClienteModule} from './cliente/cliente.module';

@NgModule({
  declarations: [HeaderComponent, HomeBodyComponent, FooterComponent, RegisterComponent, LoginComponent],
  exports: [
    HeaderComponent,
    HomeBodyComponent,
    FooterComponent,
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    UserModule,
    ClienteModule
    
  ]
})
export class CoreModule { }
