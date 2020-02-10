import { DemoScheduleElement } from '../demo-schedule-element/demo-schedule-element.model';
let _ = require('lodash');

export class DemoLocation {


  //     name: [name of location]
  //     schedule: [array of maps]
  //         each schedule element is:
  //             time1: [number, time of day i.e. 900]
  //             time2: [number, time of day i.e. 1300]
  //             price: [number, i.e.  1.5]
  //
  name: string;
  schedule: DemoScheduleElement[];

  constructor(val: any) {
    this.name = val['name'];
    this.schedule = _.map(val['schedule'], function(schedElement) {
      return new DemoScheduleElement(schedElement);
    })
  }
}
