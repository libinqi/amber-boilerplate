import { Routes, RouterModule } from '@angular/router';

import { Sales } from './sales.component';
import { SaleTicket } from './components/ticket/sale-ticket.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Sales,
    children: [
      { path: '', redirectTo: 'ticket', pathMatch: 'full' },
      { path: 'ticket', component: SaleTicket }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
