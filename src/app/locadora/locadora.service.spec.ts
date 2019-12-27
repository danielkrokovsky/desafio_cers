import { TestBed } from '@angular/core/testing';

import { LocadoraService } from './locadora.service';

describe('LocadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocadoraService = TestBed.get(LocadoraService);
    expect(service).toBeTruthy();
  });
});
