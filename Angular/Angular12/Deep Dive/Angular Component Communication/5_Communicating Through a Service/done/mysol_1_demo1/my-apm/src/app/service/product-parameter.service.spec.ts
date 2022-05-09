import { TestBed } from '@angular/core/testing';

import { ProductParameterService } from './product-parameter.service';

describe('ProductParameterService', () => {
  let service: ProductParameterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductParameterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
