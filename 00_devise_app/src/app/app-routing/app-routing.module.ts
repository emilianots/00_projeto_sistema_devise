import { SingUpFormComponent } from './../core/sing-up-form/sing-up-form.component';
import { HomeBodyComponent } from './../core/home-body/home-body.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeBodyComponent, pathMatch: 'full' },
  { path: 'register', component: SingUpFormComponent }
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
