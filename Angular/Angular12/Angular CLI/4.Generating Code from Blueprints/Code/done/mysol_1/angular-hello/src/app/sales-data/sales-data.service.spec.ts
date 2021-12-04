import { TestBed } from '@angular/core/testing';

import { SalesDataService } from './sales-data.service';

describe('SalesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesDataService = TestBed.get(SalesDataService);
    expect(service).toBeTruthy();
  });
});
