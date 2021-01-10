import { TestBed } from '@angular/core/testing';

import { PostsDbService } from './posts-db.service';

describe('PostsDbService', () => {
  let service: PostsDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
