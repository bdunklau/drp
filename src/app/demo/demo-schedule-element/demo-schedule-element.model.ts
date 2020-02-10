export class DemoScheduleElement {


  //         each schedule element is:
  //             time1: [number, time of day i.e. 900]
  //             time2: [number, time of day i.e. 1300]
  //             price: [number, i.e.  1.5]

  time1: number;
  time2: number;
  price: number;

  constructor(val: any) {
    this.time1 = parseInt(val['time1']);
    this.time2 = parseInt(val['time2']);
    this.price = parseInt(val['price']);
  }
}
