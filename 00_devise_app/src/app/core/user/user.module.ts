import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainComponent } from './user-main/user-main.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserRoutingModule } from './user.routing';

@NgModule({
  declarations: [UserMainComponent, ProjectsComponent],

  exports:[
    UserMainComponent, ProjectsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
