import { TestBed } from '@angular/core/testing';

import { GymonboardService } from './gymonboard.service';

describe('GymonboardService', () => {
  let service: GymonboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymonboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
