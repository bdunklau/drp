import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoChargeComponent } from './demo/demo-charge/demo-charge.component';
import { FooComponent } from './foo/foo.component';

const routes: Routes = [
  { path: 'demo/charges', component: DemoChargeComponent },
  { path: 'foo', component: FooComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
