
let _ = require('lodash');

import { DemoLocation } from '../demo-location/demo-location.model';


// ng generate class demo/demo-pricing/demo-pricing --type=model
export class DemoPricingModel {

  //
  // array of maps
  // each map is:
  //     name: [name of location]
  //     schedule: [array of maps]
  //         each schedule element is:
  //             time1: [number, time of day i.e. 900]
  //             time2: [number, time of day i.e. 1300]
  //             price: [number, i.e.  1.5]
  //

  locations: DemoLocation[];

  constructor(val: any) {
    this.locations = _.map(val['locations'], function(loc) {
      return new DemoLocation(loc);
    })
  }

}
