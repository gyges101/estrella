import { TestBed } from '@angular/core/testing';

import { AxiosInstanceService } from './axios-instance.service';

describe('AxiosInstanceService', () => {
  let service: AxiosInstanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxiosInstanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
