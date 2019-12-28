import { TestBed } from '@angular/core/testing';

import { MuralService } from './mural.service';

describe('MuralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuralService = TestBed.get(MuralService);
    expect(service).toBeTruthy();
  });
});
