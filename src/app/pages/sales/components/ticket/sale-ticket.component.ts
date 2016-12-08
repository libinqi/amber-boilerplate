import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';
import * as _ from 'lodash';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'sale-ticket',
  styles: [require('./sale-ticket.css')],
  template: require('./sale-ticket.html')
})
export class SaleTicket {

  constructor(private loading: LoadingService) {
  }

  public ngOnInit() {
    this.loading.start();
  }
}
