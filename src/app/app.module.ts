import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoChargeComponent } from './demo/demo-charge/demo-charge.component';
import { FooComponent } from './foo/foo.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoChargeComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
