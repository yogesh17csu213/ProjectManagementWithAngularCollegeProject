import { Component } from '@angular/core';
import { Project } from '../model/project.model';
import { ProjectRepository } from '../model/project.repository';
@Component({
    templateUrl: 'projectTable.component.html'

})
export class ProjectTableComponent {constructor(private repository: ProjectRepository) { }
getProjects(): Project[] {
return this.repository.getProjects();
}
deleteProject(id: number) {
this.repository.deleteProject(id);
}}
