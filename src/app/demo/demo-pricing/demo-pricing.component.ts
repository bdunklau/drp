import { Component, OnInit } from '@angular/core';
import { DemoPricingService } from '../demo-pricing.service';

@Component({
  selector: 'app-demo-pricing',
  templateUrl: './demo-pricing.component.html',
  styleUrls: ['./demo-pricing.component.css']
})
export class DemoPricingComponent implements OnInit {

  constructor(private pricingService: DemoPricingService) { }

  ngOnInit() {
    console.log('this.pricingService = ', this.pricingService);
    this.pricingService.getPricingForCity('Dallas');
  }

}
