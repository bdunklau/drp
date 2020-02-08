import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTravelComponent } from './demo-travel.component';

describe('DemoTravelComponent', () => {
  let component: DemoTravelComponent;
  let fixture: ComponentFixture<DemoTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTravelComponent ]
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
