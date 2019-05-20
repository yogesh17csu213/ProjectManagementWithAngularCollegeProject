import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Project } from '../model/project.model';
import { ProjectRepository } from '../model/project.repository';
@Component({
    templateUrl: 'projectEditor.component.html'
})
// tslint:disable-next-line:no-inferrable-types
export class ProjectEditorComponent {
    editing: boolean = false;
    project: Project = new Project();
    constructor(private repository: ProjectRepository, private router: Router,activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
    Object.assign(this.project,
    repository.getProject(activeRoute.snapshot.params["id"]));
    }
    }
    save(form: NgForm) {
    this.repository.saveProject(this.project);
    this.router.navigateByUrl("/admin/main/projects");
    }
}
