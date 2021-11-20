import { TestBed } from '@angular/core/testing';

import { Relatorio2Service } from './relatorio2.service';

describe('Relatorio2Service', () => {
  let service: Relatorio2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Relatorio2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
