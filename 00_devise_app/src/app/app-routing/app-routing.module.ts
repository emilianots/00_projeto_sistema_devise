import { RegisterProjectComponent } from './../core/user/register-project/register-project.component';
import { CurrentProjectComponent } from './../core/user/current-project/current-project.component';
import { ProjectsComponent } from './../core/user/projects/projects.component';

import { CliUserMainComponent } from './../core/cliente/cli-user-main/cli-user-main.component';
import { CliProjectsComponent } from './../core/cliente/cli-projects/cli-projects.component';
import { CliCurrentProjectComponent } from './../core/cliente/cli-current-project/cli-current-project.component';

import { HomeBodyComponent } from './../core/home-body/home-body.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from '../core/register/register.component';
import { LoginComponent } from '../core/login/login.component';
import { UserMainComponent } from '../core/user/user-main/user-main.component';
import { EquipesComponent } from '../core/user/equipes/equipes.component';

const routes: Routes = [
  { path: '', redirectTo: "home/user/projetos", pathMatch: 'full' },

  {
    path: 'home', component: HomeBodyComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: 'novoProjeto', component: RegisterProjectComponent },
  { path: 'atualProjeto/:id', component: CurrentProjectComponent },

  {
    path: 'home/user', component: UserMainComponent, //com o pathMatch esse troço de rota da erro carai!!!!
    children: [
      {
        path: 'projetos', component: ProjectsComponent
      },
      {
        path: 'equipes', component: EquipesComponent
      },

    ]
  },
  {
    path: 'home/cliente', component: CliUserMainComponent,
    children: [
      {
        path: 'projetos', component: CliProjectsComponent,
        children: [

        ]
      }
    ]
  },
  {
    path: 'home/cliente', component: CliUserMainComponent,
    children: [
      {
        path: 'projetos', component: CliProjectsComponent,
        children: [

        ]
      }
    ]
  },
  { path: 'projeto/:id', component: CliCurrentProjectComponent }
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
