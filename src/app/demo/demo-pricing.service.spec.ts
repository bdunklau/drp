import { TestBed } from '@angular/core/testing';

import { DemoPricingService } from './demo-pricing.service';

describe('DemoPricingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoPricingService = TestBed.get(DemoPricingService);
    expect(service).toBeTruthy();
  });
});
