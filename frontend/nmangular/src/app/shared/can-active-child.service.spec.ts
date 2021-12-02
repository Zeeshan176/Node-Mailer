import { TestBed } from '@angular/core/testing';

import { CanActiveChildService } from './can-active-child.service';

describe('CanActiveChildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActiveChildService = TestBed.get(CanActiveChildService);
    expect(service).toBeTruthy();
  });
});
