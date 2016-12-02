import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
    <div class="a-main">
      <div class="a-content">
        <router-outlet></router-outlet>
      </div>
    </div>
    `
})
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
