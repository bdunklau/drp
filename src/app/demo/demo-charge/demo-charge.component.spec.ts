import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoChargeComponent } from './demo-charge.component';
import { DemoTravelComponent } from '../demo-travel/demo-travel.component';
import { DemoTransactionsComponent } from '../demo-transactions/demo-transactions.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, of } from 'rxjs';


describe('DemoChargeComponent', () => {
  let component: DemoChargeComponent;
  let fixture: ComponentFixture<DemoChargeComponent>;

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
      declarations: [ DemoChargeComponent, DemoTravelComponent, DemoTransactionsComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ {provide: AngularFirestore, useValue: AngularFirestoreStub} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
