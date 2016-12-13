import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';

import { LoadingComponent } from './components/loading.component';
import { LoadingService } from './services/loading.service';
import { StateMachineService } from './services/state-machine.service';
import { HttpClient } from './services/http-client';

const CORE_SERVICES = [
  LoadingService,
  StateMachineService,
  HttpClient
];

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
  providers: [
    LoadingService,
    StateMachineService, {
      provide: HttpClient,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpClient(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    }
  ]
})

export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...CORE_SERVICES
      ]
    };
  }

  // constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
  //   if (parentModule) {
  //     throw new Error(
  //       'CoreModule已加载. 核心模块只能在主入口被导入，不要重复导入！');
  //   }
  // }
}
