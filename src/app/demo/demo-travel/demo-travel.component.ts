import { Component, OnInit } from '@angular/core';
import { DemoPricingService } from '../demo-pricing.service';
import { DemoPricingModel } from '../demo-pricing/demo-pricing.model';


@Component({
  selector: 'app-demo-travel',
  templateUrl: './demo-travel.component.html',
  styleUrls: ['./demo-travel.component.css']
})
export class DemoTravelComponent implements OnInit {

  // locations: {location: string, price: number}[];
  cityPricing: DemoPricingModel;

  constructor(private pricingService: DemoPricingService) { }

  async ngOnInit() {
    // this.locations = this.pricingService.getPricing({hour:1, minute:1});
    this.cityPricing = await this.pricingService.getPricingForCity('Dallas');
    console.log('this.cityPricing = ',this.cityPricing);
    console.log('this.cityPricing.locations = ',this.cityPricing.locations);
    // this.cityPricing.name = 'xxxx';
  }


}
