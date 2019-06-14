import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainComponent } from './user-main/user-main.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';

@NgModule({
  declarations: [UserMainComponent, ProjectsComponent],

  exports:[
    UserMainComponent, ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class UserModule { }
