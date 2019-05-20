import { NgModule } from '@angular/core';
import { ProjectRepository } from './project.repository';
import { StaticDataSource } from './static.datasource';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';
import { AuthService } from '../model/auth.service';
@NgModule({
    imports: [HttpClientModule],

 providers: [ProjectRepository, RestDataSource, AuthService, { provide: StaticDataSource, useClass: RestDataSource} ]
})
export class ModelModule { }
