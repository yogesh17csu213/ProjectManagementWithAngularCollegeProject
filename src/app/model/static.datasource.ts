import { Injectable } from '@angular/core';
import { Project } from './project.model';


import { Observable, from } from 'rxjs';
@Injectable()
export class StaticDataSource {
 private projects: Project[] = [
    new Project(1, 'Project1', 'ME', '17csu101', '17csu102', '17csu103', '17csu141', 'Management Program', 'Started'),
    new Project(2, 'Project2', 'CSE', '17csu113', '17csu114', '17csu173', '17csu115', 'Download Manager', 'Completed'),
    new Project(3, 'Project3', 'ECE', '17csu112', '17csu142', '17csu163', '17csu124', 'Fire Alarm', 'Evaluated'),
    new Project(4, 'Project4', 'CIVIL', '17csu111', '17csu152', '17csu153', '17csu134', 'cuns company', 'In Progress')

 ];
 getProjects(): Observable<Project[]> {
    return from([this.projects]);
    }
 }
