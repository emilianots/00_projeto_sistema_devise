import { AppRoutingModule } from './../../app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliProjectsComponent } from './cli-projects/cli-projects.component';
import { CliCurrentProjectComponent } from './cli-current-project/cli-current-project.component';
import { CliUserMainComponent } from './cli-user-main/cli-user-main.component';

@NgModule({
  declarations: [CliProjectsComponent, CliCurrentProjectComponent, CliUserMainComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    CliUserMainComponent,
    CliProjectsComponent,
    CliCurrentProjectComponent
  ]
})
export class ClienteModule { }