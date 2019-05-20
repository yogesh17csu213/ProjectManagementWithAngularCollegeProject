import { Component } from '@angular/core';
import { routerTransition } from './router.transitions';
@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  template: `
    <div [@routerTransition]="getState(o)">
      <router-outlet #o="outlet"></router-outlet>
    </div>
  `
})
export class AppComponent {
getState(outlet) {
  return outlet.activatedRouteData.state;
}
}
