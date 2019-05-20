import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { ProjectComponent } from './project.component';
import { RouterModule } from '@angular/router';
@NgModule({
 imports: [ModelModule, BrowserModule, FormsModule , RouterModule],
 declarations: [ProjectComponent],
 exports: [ProjectComponent]
})
export class ProjectModule { }

