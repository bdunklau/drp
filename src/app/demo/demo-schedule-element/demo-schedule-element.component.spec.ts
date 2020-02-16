import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoScheduleElementComponent } from './demo-schedule-element.component';

describe('DemoScheduleElementComponent', () => {
  let component: DemoScheduleElementComponent;
  let fixture: ComponentFixture<DemoScheduleElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoScheduleElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoScheduleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
