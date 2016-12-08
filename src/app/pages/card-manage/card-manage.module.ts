import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardManage } from './card-manage.component';
import { routing } from './card-manage.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    CardManage
  ],
  providers: [
  ]
})
export default class CardManageModule { }
