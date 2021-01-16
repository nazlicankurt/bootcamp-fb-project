import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplePageContainerComponent } from './example-page-container.component';

describe('ExamplePageContainerComponent', () => {
  let component: ExamplePageContainerComponent;
  let fixture: ComponentFixture<ExamplePageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplePageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplePageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
