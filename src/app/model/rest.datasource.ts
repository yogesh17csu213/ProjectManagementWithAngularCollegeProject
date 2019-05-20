import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project.model';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = 3500;
@Injectable()
export class RestDataSource {
   // tslint:disable-next-line:variable-name
   auth_token: string;
   baseUrl: string;
   constructor(private http: HttpClient) {
      this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
   }
   getProjects(): Observable<Project[]> {
      return this.http.get<Project[]>(this.baseUrl + 'projects');
   }
   authenticate(user: string, pass: string): Observable<boolean> {
      return this.http.post<any>(this.baseUrl + 'login', {
         name: user, password: pass
      }).pipe(map(response => {
         this.auth_token = response.success ? response.token : null;
         return response.success;
      }));
   }
   saveProject(project: Project): Observable<Project> {
      return this.http.post<Project>(this.baseUrl + 'projects', project, this.getOptions());
   }
   updateProject(project: Project): Observable<Project> {
      return this.http.put<Project>(`${this.baseUrl}projects/${project.id}`, project, this.getOptions());
   }
   deleteProject(id: number): Observable<Project> {
      return this.http.delete<Project>(`${this.baseUrl}projects/${id}`,
         this.getOptions());
   }
   private getOptions() {
      return {
         headers: new HttpHeaders({ "Authorization": `Bearer<${this.auth_token}>` })
      }
   }

}
