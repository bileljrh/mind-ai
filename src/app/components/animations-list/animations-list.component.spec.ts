import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsListComponent } from './animations-list.component';

describe('AnimationsListComponent', () => {
  let component: AnimationsListComponent;
  let fixture: ComponentFixture<AnimationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationsListComponent]
    });
    fixture = TestBed.createComponent(AnimationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
