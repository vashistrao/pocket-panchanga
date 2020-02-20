import { TestBed } from '@angular/core/testing';

import { PanchangaDataService } from './panchanga-data.service';

describe('PanchangaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanchangaDataService = TestBed.get(PanchangaDataService);
    expect(service).toBeTruthy();
  });
});
