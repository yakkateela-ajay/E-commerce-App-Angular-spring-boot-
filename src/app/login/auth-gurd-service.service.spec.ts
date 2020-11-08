import { TestBed } from '@angular/core/testing';

import { AuthGurdServiceService } from './auth-gurd-service.service';

describe('AuthGurdServiceService', () => {
  let service: AuthGurdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGurdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
