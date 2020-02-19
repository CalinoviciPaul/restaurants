import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoiceImportListComponentComponent } from './invoice-import-list-component/invoice-import-list-component.component';
import {Route, RouterModule} from "@angular/router";

export const routes: Route[]=[{
  path: '',
  children: [
    {
      path: '',
      redirectTo: 'invoice',
      pathMatch: 'full'
    },{
      path: 'invoice',
      component: InvoiceImportListComponentComponent
    }
  ]
}];


@NgModule({
  declarations: [AppComponent, InvoiceImportListComponentComponent],
  imports: [BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
