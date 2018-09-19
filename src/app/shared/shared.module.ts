import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';

const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
];

const components = [
  LayoutComponent,
  SidebarComponent
];

const exported = [
  ...components,
  FormsModule,
  CommonModule,
];

const providers = [
];

@NgModule({
  imports: modules,
  declarations: components,
  exports: exported,
  providers: providers,
  entryComponents:[LayoutComponent, SidebarComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
