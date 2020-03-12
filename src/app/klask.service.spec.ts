import { TestBed } from '@angular/core/testing';

import { KlaskService } from './klask.service';

describe('KlaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KlaskService = TestBed.get(KlaskService);
    expect(service).toBeTruthy();
  });
});
