import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Dashboard } from './dashboard.component';
import { routing } from './dashboard.routing';
import { DockComponent } from './components/dock/dock.component';
import { NavService } from './services/nav.service';
import { WindowService } from './services/window.service';
import { SafePipe } from './pipes/safe.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';

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
    NavbarComponent,
    TaskbarComponent
  ],
  providers: [
    NavService,
    WindowService
  ]
})
export default class DashboardModule { }
