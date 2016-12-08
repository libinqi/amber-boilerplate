import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Loading } from './components/loading/loading.component';
import { LoadingService } from './services/loading.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Loading
  ],
  providers:[
    LoadingService
  ],
  exports: [
    Loading
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        LoadingService
      ]
    }
  }
}
