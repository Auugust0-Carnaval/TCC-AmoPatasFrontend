import { TestBed } from '@angular/core/testing';

import { RacaService } from './raca.service';

describe('RacaService', () => {
  let service: RacaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
