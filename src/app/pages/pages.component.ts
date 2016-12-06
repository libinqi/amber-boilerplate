import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
    <div>
        <router-outlet></router-outlet>
    </div>
    `
})
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
