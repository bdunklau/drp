import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoTravelLocationComponent } from './demo-travel-location.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('DemoTravelLocationComponent', () => {
  let component: DemoTravelLocationComponent;
  let fixture: ComponentFixture<DemoTravelLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTravelLocationComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [  DemoTravelLocationComponent,
                       { provide: DemoTravelLocationComponent, useValue: new DemoTravelLocationComponent() },
                      ]
    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(DemoTravelLocationComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(TestBed.get(DemoTravelLocationComponent)).toBeTruthy();
  });
});
