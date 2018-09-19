import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const modules = [
  BrowserModule,
  AppRoutingModule,
  CoreModule.forRoot(),
  NgbModule.forRoot()
];

const exportsArray = [];

const providers = [
   // <-- import provider
];

@NgModule({
  imports: modules,
  declarations: [AppComponent],
  providers: providers,
  exports: exportsArray,
  bootstrap: [AppComponent]
})
export class AppModule {
}
