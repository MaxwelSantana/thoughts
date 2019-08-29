import { TestBed } from '@angular/core/testing';

import { ThoughtsService } from './thoughts.service';

describe('ThoughtsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThoughtsService = TestBed.get(ThoughtsService);
    expect(service).toBeTruthy();
  });
});
