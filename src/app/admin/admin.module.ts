import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';
import { ProjectTableComponent } from './projectTable.component';
import { ProjectEditorComponent } from './projectEditor.component';

// tslint:disable-next-line:prefer-const
let routing = RouterModule.forChild([
 { path: 'auth', component: AuthComponent , data: { state: 'auth' } },
 { path: 'main', component: AdminComponent , canActivate: [AuthGuard], data: { state: 'main' } ,
 children: [
    { path: 'projects/:mode/:id', component: ProjectEditorComponent },
    { path: 'projects/:mode', component: ProjectEditorComponent  },
    { path: 'projects', component: ProjectTableComponent },
    { path: '**', redirectTo: 'projects' }
]  },
 { path: '**', redirectTo: 'auth', }
]);
@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent ,
        ProjectTableComponent, ProjectEditorComponent]
   })
   export class AdminModule { }
