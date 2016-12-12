import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './components/loading.component';
import { LoadingService } from './services/loading.service';

const CORE_SERVICES = [
  LoadingService
];

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
  providers: [LoadingService]
})

export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...CORE_SERVICES
      ]
    }
  }

  // constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
  //   if (parentModule) {
  //     throw new Error(
  //       'CoreModule已加载. 核心模块只能在主入口被导入，不要重复导入！');
  //   }
  // }
}
