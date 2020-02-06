import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoChargeComponent } from './demo-charge.component';

describe('DemoChargeComponent', () => {
  let component: DemoChargeComponent;
  let fixture: ComponentFixture<DemoChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoChargeComponent ]
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
