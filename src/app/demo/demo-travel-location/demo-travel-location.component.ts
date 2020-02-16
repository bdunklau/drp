import { Component, OnInit, Input } from '@angular/core';
import { DemoScheduleElement } from '../demo-schedule-element/demo-schedule-element.model';
import { DemoLocation } from '../demo-location/demo-location.model';

@Component({
  selector: 'app-demo-travel-location',
  templateUrl: './demo-travel-location.component.html',
  styleUrls: ['./demo-travel-location.component.css']
})
export class DemoTravelLocationComponent implements OnInit {

  @Input() locField: DemoLocation;

  // constructor(locationField: {location: string, price: number}) {
  //   this.locationField = locationField;
  // }

  constructor() {}

  ngOnInit() {
  }

}
