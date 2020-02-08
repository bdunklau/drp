import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTravelLocationComponent } from './demo-travel-location.component';

describe('DemoTravelLocationComponent', () => {
  let component: DemoTravelLocationComponent;
  let fixture: ComponentFixture<DemoTravelLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTravelLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTravelLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
