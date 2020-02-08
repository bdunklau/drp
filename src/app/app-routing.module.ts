import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoChargeComponent } from './demo/demo-charge/demo-charge.component';
import { DemoPricingComponent } from './demo/demo-pricing/demo-pricing.component';

const routes: Routes = [
  { path: 'demo/charge', component: DemoChargeComponent },
  { path: 'demo/pricing', component: DemoPricingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
