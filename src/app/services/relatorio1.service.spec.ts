import { TestBed } from '@angular/core/testing';

import { Relatorio1Service } from './relatorio1.service';

describe('Relatorio1Service', () => {
  let service: Relatorio1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Relatorio1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
