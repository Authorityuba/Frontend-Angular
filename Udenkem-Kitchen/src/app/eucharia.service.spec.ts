import { TestBed } from '@angular/core/testing';

import { EuchariaService } from './eucharia.service';

describe('EuchariaService', () => {
  let service: EuchariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuchariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
