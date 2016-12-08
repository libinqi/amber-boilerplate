import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'sales', loadChildren: () => System.import('./sales/sales.module') },
      { path: 'card', loadChildren: () => System.import('./card-manage/card-manage.module') },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
