import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPricingComponent } from './demo-pricing.component';

describe('DemoPricingComponent', () => {
  let component: DemoPricingComponent;
  let fixture: ComponentFixture<DemoPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPricingComponent ]
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
