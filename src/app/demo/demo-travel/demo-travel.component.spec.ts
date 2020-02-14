import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoTravelComponent } from './demo-travel.component';
import { DemoTravelLocationComponent } from '../demo-travel-location/demo-travel-location.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, of } from 'rxjs';


describe('DemoTravelComponent', () => {
  let component: DemoTravelComponent;
  let fixture: ComponentFixture<DemoTravelComponent>;

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
                  {provide: AngularFirestore, useValue: AngularFirestoreStub} ]
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
