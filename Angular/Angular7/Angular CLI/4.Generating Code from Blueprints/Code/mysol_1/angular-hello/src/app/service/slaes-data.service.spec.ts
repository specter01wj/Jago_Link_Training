import { TestBed } from '@angular/core/testing';

import { SlaesDataService } from './slaes-data.service';

describe('SlaesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlaesDataService = TestBed.get(SlaesDataService);
    expect(service).toBeTruthy();
  });
});
