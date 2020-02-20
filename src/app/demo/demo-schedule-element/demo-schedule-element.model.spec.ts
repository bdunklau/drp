import { DemoScheduleElement } from './demo-schedule-element.model';

describe('DemoScheduleElement', () => {
  it('should create an instance', () => {


      let s1 = {time1: 900, time2: 1000, price: 1.5};
      // let s2 = {time1: 1000, time2: 1100, price: 2.5};
      // let schedule1 = [s1, s2];
      // let location1 = {name: 'loc1', schedule: schedule1};
      //
      // let s3 = {time1: 900, time2: 1000, price: 2.2};
      // let s4 = {time1: 1000, time2: 1100, price: 3.2};
      // let schedule2 = [s3, s4];
      // let location2 = {name: 'loc2', schedule: schedule2};
      //
      // let locations = [location1, location2];
      // let city = {locations: locations};


    expect(new DemoScheduleElement(s1)).toBeTruthy();
    expect(new DemoScheduleElement(s1).time1).toEqual(900);
    expect(new DemoScheduleElement(s1).time2).toEqual(1000);
    expect(new DemoScheduleElement(s1).price).toEqual(1.5);
  });
});
