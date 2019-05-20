import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectModule } from './project/project.module';
import { ProjectFirstGuard } from './projectFirst.guard';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
imports: [
    BrowserModule, BrowserAnimationsModule , MDBBootstrapModule.forRoot(),
    ProjectModule, RouterModule.forRoot([
      {
      path: 'project', component: ProjectComponent,
      canActivate: [ProjectFirstGuard]
      },
      {path: 'admin', loadChildren: './admin/admin.module#AdminModule' , canActivate: [ProjectFirstGuard]
      },
      { path: '**', redirectTo: '/project' }
    ] ) ] ,
  declarations: [
    AppComponent
  ],
      providers: [ProjectFirstGuard],

       bootstrap: [AppComponent]
})
export class AppModule { }
