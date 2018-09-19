import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

// import ngx-translate and the http loader
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';


const components = [];


const modules = [
  HttpModule,
  HttpClientModule,
  RouterModule,
  BrowserAnimationsModule,
  SharedModule,
  BrowserAnimationsModule
];

const providers = [
];

const exported = [
  ...components
];

@NgModule({
  imports: modules,
  declarations: components,
  exports: exported
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers
    };
  }
}
