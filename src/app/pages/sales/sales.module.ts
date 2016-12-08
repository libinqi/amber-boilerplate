import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

import { Sales } from './sales.component';
import { SaleTicket } from './components/ticket/sale-ticket.component';
import { routing } from './sales.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    routing
  ],
  declarations: [
    Sales,
    SaleTicket
  ],
  providers: [
  ]
})
export default class SalesModule { }
