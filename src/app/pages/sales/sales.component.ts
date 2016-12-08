import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

@Component({
  selector: 'sales',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./sales.css')],
  template: require('./sales.html')
})
export class Sales {

  constructor() {
  }

  public ngOnInit() {

  }
}
