import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoTravelComponent } from './demo-travel.component';
import { DemoPricingModel } from '../demo-pricing/demo-pricing.model';
import { DemoTravelLocationComponent } from '../demo-travel-location/demo-travel-location.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, of } from 'rxjs';


describe('DemoTravelComponent', () => {
    let component: DemoTravelComponent;
    let fixture: ComponentFixture<DemoTravelComponent>;


    let s1 = {time1: 900, time2: 1000, price: 1.5};
    let s2 = {time1: 1000, time2: 1100, price: 2.5};
    let schedule1 = [s1, s2];
    let location1 = {name: 'loc1', schedule: schedule1};

    let s3 = {time1: 900, time2: 1000, price: 2.2};
    let s4 = {time1: 1000, time2: 1100, price: 3.2};
    let schedule2 = [s3, s4];
    let location2 = {name: 'loc2', schedule: schedule2};

    let locations = [location1, location2];
    let city = {name: 'Dallas', locations: locations};
    let pricing : DemoPricingModel = new DemoPricingModel(city);


    const AngularFirestoreStub = {
        collection: (name: string, f: (ref:any) => {}) => ({
          doc: (_id: string) => ({
            valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
            set: (_d: any) => new Promise((resolve, _reject) => resolve()),
            ref: {
              get: () => ({
                data: () => ({
                  text: 'mock data',
                }),
              }),
            }
          }),
          valueChanges: () => of([{id: '1', event: 'event1', date: {toDate: () => new Date()}}, // 2 mock LogEntry's
                                  {id: '2', event: 'event2', date: {toDate: () => new Date()}}]), // THIS IS NOT WHAT WE WANT TO MOCK HERE.
          snapshotChanges: () => ({
            pipe: (xxx) => {}
          })
        }),
      };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTravelComponent, DemoTravelLocationComponent ],
      providers: [ DemoTravelComponent, DemoTravelLocationComponent,
                  {provide: AngularFirestore, useValue: AngularFirestoreStub},
                  {provide: DemoPricingModel, useValue: pricing} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
