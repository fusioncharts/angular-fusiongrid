import { TestBed } from '@angular/core/testing';

import { FusionGridService } from './fusion-grid.service';

describe('FusionGridService', () => {
  let service: FusionGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FusionGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
