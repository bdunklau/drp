import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTransactionsComponent } from './demo-transactions.component';

describe('DemoTransactionsComponent', () => {
  let component: DemoTransactionsComponent;
  let fixture: ComponentFixture<DemoTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
