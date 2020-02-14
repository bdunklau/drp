import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-travel-location',
  templateUrl: './demo-travel-location.component.html',
  styleUrls: ['./demo-travel-location.component.css']
})
export class DemoTravelLocationComponent implements OnInit {

  @Input() locField: {location: string, price: number};

  // constructor(locationField: {location: string, price: number}) {
  //   this.locationField = locationField;
  // }

  constructor() {}

  ngOnInit() {
  }

}
