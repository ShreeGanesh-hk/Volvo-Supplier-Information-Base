import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { ChartsModule } from 'ng2-charts';


const modules = [
  BrowserModule,
  AppRoutingModule,
  ChartsModule,
  CoreModule.forRoot(),
  NgbModule.forRoot(),
  AgGridModule.withComponents([])
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
