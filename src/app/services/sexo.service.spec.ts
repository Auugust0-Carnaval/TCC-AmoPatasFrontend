import { TestBed } from '@angular/core/testing';

import { SexoService } from './sexo.service';

describe('SexoService', () => {
  let service: SexoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SexoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
