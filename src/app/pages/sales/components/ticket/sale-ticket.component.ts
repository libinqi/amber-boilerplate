import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';
import * as _ from 'lodash';
import { LoadingService } from '../../../../core/services/loading.service';
import { BasicService } from '../../services/basic.service';

@Component({
  selector: 'sale-ticket',
  styles: [require('./sale-ticket.css')],
  template: require('./sale-ticket.html')
})
export class SaleTicket {

  private productList = [];

  constructor(private basicService: BasicService, private loading: LoadingService) {
    basicService.init();
  }

  public ngOnInit() {
    setTimeout(() => {
      this.productList = this.basicService.productList;
    }, 2000);
  }


}
