import { TestBed } from '@angular/core/testing';

import { ProfileDbService } from './profile-db.service';

describe('ProfileDbService', () => {
  let service: ProfileDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
