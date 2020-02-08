import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoChargeComponent } from './demo/demo-charge/demo-charge.component';
import { DemoPricingComponent } from './demo/demo-pricing/demo-pricing.component';
import { DemoTravelComponent } from './demo/demo-travel/demo-travel.component';
import { DemoTransactionsComponent } from './demo/demo-transactions/demo-transactions.component';
import { DemoTravelLocationComponent } from './demo/demo-travel-location/demo-travel-location.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoChargeComponent,
    DemoPricingComponent,
    DemoTravelComponent,
    DemoTransactionsComponent,
    DemoTravelLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
