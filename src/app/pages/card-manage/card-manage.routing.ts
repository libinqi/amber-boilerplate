import { Routes, RouterModule }  from '@angular/router';

import { CardManage } from './card-manage.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CardManage,
    children: [
    ]
  }
];

export const routing = RouterModule.forChild(routes);
