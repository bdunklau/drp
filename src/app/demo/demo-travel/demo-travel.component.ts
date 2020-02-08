import { Component, OnInit } from '@angular/core';
import { DemoPricingService } from '../../demo/demo-pricing.service';


@Component({
  selector: 'app-demo-travel',
  templateUrl: './demo-travel.component.html',
  styleUrls: ['./demo-travel.component.css']
})
export class DemoTravelComponent implements OnInit {

  locations: {location: string, price: number}[];

  constructor(private pricingService: DemoPricingService) { }

  ngOnInit() {
    this.locations = this.pricingService.getPricing({hour:1, minute:1});
  }

}
