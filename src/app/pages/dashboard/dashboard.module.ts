import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Dashboard } from './dashboard.component';
import { routing }  from './dashboard.routing';
import { DockComponent } from './components/dock/dock.component';
import { WindowService } from "./services/window.service";
import { SafePipe } from './pipes/safe.pipe';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    Dashboard,
    DockComponent,
    SafePipe,
    SearchComponent,
    NavbarComponent
  ],
  providers: [
    WindowService
  ]
})
export default class DashboardModule {}
