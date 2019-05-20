import { Injectable } from '@angular/core';
import {
 ActivatedRouteSnapshot, RouterStateSnapshot,
 Router
} from '@angular/router';
import { ProjectComponent } from './project/project.component';
@Injectable()
export class ProjectFirstGuard {
 private firstNavigation = true;
 constructor(private router: Router) { }
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
 if (this.firstNavigation) {
 this.firstNavigation = false;
 // tslint:disable-next-line:triple-equals
 if (route.component != ProjectComponent) {
 this.router.navigateByUrl('/');
 return false;
 }
 }
 return true;
 }
}
