import { TestBed } from '@angular/core/testing';

import { ProductEditGuardService } from './product-edit-guard.service';

describe('ProductEditGuardService', () => {
  let service: ProductEditGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEditGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
