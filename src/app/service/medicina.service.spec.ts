import { TestBed } from '@angular/core/testing';

import { MedicinaService } from './medicina.service';

describe('MedicinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicinaService = TestBed.get(MedicinaService);
    expect(service).toBeTruthy();
  });
});
