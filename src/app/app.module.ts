import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoChargeComponent } from './demo/demo-charge/demo-charge.component';
import { DemoPricingComponent } from './demo/demo-pricing/demo-pricing.component';
import { DemoTravelComponent } from './demo/demo-travel/demo-travel.component';
import { DemoTransactionsComponent } from './demo/demo-transactions/demo-transactions.component';
import { DemoTravelLocationComponent } from './demo/demo-travel-location/demo-travel-location.component';
import { AngularFirestore, AngularFirestoreCollection/*, CollectionReference*/ } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    DemoChargeComponent,
    DemoPricingComponent,
    DemoTravelComponent,
    DemoTransactionsComponent,
    DemoTravelLocationComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
