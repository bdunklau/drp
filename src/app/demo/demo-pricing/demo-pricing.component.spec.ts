import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoPricingComponent } from './demo-pricing.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, of } from 'rxjs';


describe('DemoPricingComponent', () => {
  let component: DemoPricingComponent;
  let fixture: ComponentFixture<DemoPricingComponent>;


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
      declarations: [ DemoPricingComponent ],
      providers: [ {provide: AngularFirestore, useValue: AngularFirestoreStub} ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
