import { TestBed } from '@angular/core/testing';

import { NavigateAwayGuardService } from './navigate-away-guard.service';

describe('NavigateAwayGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigateAwayGuardService = TestBed.get(NavigateAwayGuardService);
    expect(service).toBeTruthy();
  });
});
