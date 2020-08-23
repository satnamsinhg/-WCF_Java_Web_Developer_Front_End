import { TestBed } from '@angular/core/testing';

import { HttpControllerService } from './http-controller.service';

describe('HttpControllerService', () => {
  let service: HttpControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
