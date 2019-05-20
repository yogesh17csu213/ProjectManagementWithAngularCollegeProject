import { Injectable } from '@angular/core';
import { Project } from './project.model';
// import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
@Injectable()
export class ProjectRepository {
   private projects: Project[] = [];
   private Branch: string[] = [];
   constructor(private dataSource: RestDataSource) {
      dataSource.getProjects().subscribe(data => {
         this.projects = data;
         this.Branch = data.map(p => p.branch)
            // tslint:disable-next-line:triple-equals
            .filter((c, index, array) => array.indexOf(c) == index).sort();
      });
   }
   getProjects(branch: string = null): Project[] {
      return this.projects
         // tslint:disable-next-line:triple-equals
         .filter(p => branch == null || branch == p.branch);
   }
   getProject(id: number): Project {
      // tslint:disable-next-line:triple-equals
      return this.projects.find(p => p.id == id);
   }
   getBranch(): string[] {
      return this.Branch;
   }
   saveProject(project: Project) {
      // tslint:disable-next-line:triple-equals


            {
               if (project.id == null || project.id === 0) {
                  if (this.projects.find(p => p.name === project.name) != null ||
                  this.projects.find(p => p.strollno1 === project.strollno1) ||
                  this.projects.find(p => p.strollno1 === project.strollno2) ||
                  this.projects.find(p => p.strollno1 === project.strollno3) ||
                  this.projects.find(p => p.strollno1 === project.strollno4) ||
                  this.projects.find(p => p.strollno2 === project.strollno1) ||
                  this.projects.find(p => p.strollno2 === project.strollno2) ||
                  this.projects.find(p => p.strollno2 === project.strollno3) ||
                  this.projects.find(p => p.strollno2 ===  project.strollno4) ||
                  this.projects.find(p => p.strollno3 === project.strollno1) ||
                  this.projects.find(p => p.strollno3 === project.strollno2) ||
                  this.projects.find(p => p.strollno3 === project.strollno3) ||
                   this.projects.find(p => p.strollno3 === project.strollno4) ||
                    this.projects.find(p => p.strollno4 === project.strollno1) ||
                     this.projects.find(p => p.strollno4 === project.strollno2) ||
                      this.projects.find(p => p.strollno4 === project.strollno3) ||
                       this.projects.find(p => p.strollno4 === project.strollno4)) {
                     console.log(project.id);
                     console.log(project.name);

                     console.log('exits');

                  } else {this.dataSource.saveProject(project)
            .subscribe(p => this.projects.push(p)); }
      } else {
         this.dataSource.updateProject(project)
            .subscribe(p => {
               this.projects.splice(this.projects.
                  // tslint:disable-next-line:no-shadowed-variable
                  findIndex(p => p.id === project.id), 1, project);
            });
      }}
   }
   deleteProject(id: number) {
      this.dataSource.deleteProject(id).subscribe(p => {
         this.projects.splice(this.projects.
            // tslint:disable-next-line:no-shadowed-variable
            findIndex(p => p.id === id), 1);
      });
   }
}
