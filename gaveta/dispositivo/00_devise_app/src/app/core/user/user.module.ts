import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainComponent } from './user-main/user-main.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { CurrentProjectComponent } from './current-project/current-project.component';
import { RegisterProjectComponent } from './register-project/register-project.component';

@NgModule({
  declarations: [UserMainComponent, ProjectsComponent, CurrentProjectComponent, RegisterProjectComponent],

  exports:[
    UserMainComponent, ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ]
})
export class UserModule { }
