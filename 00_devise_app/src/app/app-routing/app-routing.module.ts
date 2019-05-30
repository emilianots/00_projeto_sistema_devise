
import { HomeBodyComponent } from './../core/home-body/home-body.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from '../core/register/register.component';
import { LoginComponent } from '../core/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'home', component: HomeBodyComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path:'login', component: LoginComponent, pathMatch: 'full'}
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }