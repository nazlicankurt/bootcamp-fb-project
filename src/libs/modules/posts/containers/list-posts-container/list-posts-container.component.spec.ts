import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostsContainerComponent } from './list-posts-container.component';

describe('ListPostsContainerComponent', () => {
  let component: ListPostsContainerComponent;
  let fixture: ComponentFixture<ListPostsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
