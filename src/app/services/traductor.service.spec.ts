import { TestBed } from '@angular/core/testing';

import { TraductorService } from './traductor.service';

describe('TraductorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraductorService = TestBed.get(TraductorService);
    expect(service).toBeTruthy();
  });
});
