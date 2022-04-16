import { TestBed } from '@angular/core/testing';

import { PorteService } from './porte.service';

describe('PorteService', () => {
  let service: PorteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
