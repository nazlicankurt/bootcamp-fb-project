import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostsContainerComponent } from './my-posts-container.component';

describe('MyPostsContainerComponent', () => {
  let component: MyPostsContainerComponent;
  let fixture: ComponentFixture<MyPostsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPostsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
