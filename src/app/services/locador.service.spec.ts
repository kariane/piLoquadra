import { TestBed } from '@angular/core/testing';

import { LocadorService } from './locador.service';

describe('LocadorService', () => {
  let service: LocadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
