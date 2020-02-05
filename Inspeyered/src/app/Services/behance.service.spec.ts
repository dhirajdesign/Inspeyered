import { TestBed } from '@angular/core/testing';

import { unSplashService } from './behance.service';

describe('unSplashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: unSplashService = TestBed.get(unSplashService);
    expect(service).toBeTruthy();
  });
});
