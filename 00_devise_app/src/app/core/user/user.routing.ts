
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [

    {path: '', component:ProjectsComponent, pathMatch: "full", children:[
      {path: 'projeto', component: ProjectsComponent,}
    ]},
  ]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
