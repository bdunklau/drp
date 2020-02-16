import { Component, OnInit, Input } from '@angular/core';
import { DemoScheduleElement } from './demo-schedule-element.model';


@Component({
  selector: 'app-demo-schedule-element',
  templateUrl: './demo-schedule-element.component.html',
  styleUrls: ['./demo-schedule-element.component.css']
})
export class DemoScheduleElementComponent implements OnInit {

  @Input() scheduleElementField: DemoScheduleElement;

  constructor() { }

  ngOnInit() {
  }

}
