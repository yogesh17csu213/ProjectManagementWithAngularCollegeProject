import { Component } from '@angular/core';
import { Project } from '../model/project.model';
import { ProjectRepository } from '../model/project.repository' ;
import { Router } from '@angular/router';
@Component({
 selector: 'app-project',
 templateUrl: 'project.component.html'
})
export class ProjectComponent {
    public selectedBranch1 = null;
    public projectsPerPage = 10;
 public selectedPage = 1;
    constructor(private repository: ProjectRepository , private router: Router) { }

    get projects(): Project[] {

    // tslint:disable-next-line:prefer-const
    let pageIndex = (this.selectedPage - 1) * this.projectsPerPage;
    return this.repository.getProjects(this.selectedBranch1)
    .slice(pageIndex, pageIndex + this.projectsPerPage);
}
get Branch(): string[] {
return this.repository.getBranch();
}
changeBranch1(newBranch1?: string) {
    this.selectedBranch1 = newBranch1;
}
changePage(newPage: number) {
    this.selectedPage = newPage;
    }
    changePageSize(newSize: number) {
    this.projectsPerPage = Number(newSize);
    this.changePage(1);
    }
    get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
    .getProjects(this.selectedBranch1).length / this.projectsPerPage))
    .fill(0).map((x, i) => i + 1);
    }
}
