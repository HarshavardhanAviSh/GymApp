import { TestBed } from '@angular/core/testing';

import { GymmemberService } from './gymmember.service';

describe('GymmemberService', () => {
  let service: GymmemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymmemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
