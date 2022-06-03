import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveStateComponent } from './active-state.component';

describe('ActiveStateComponent', () => {
  let component: ActiveStateComponent;
  let fixture: ComponentFixture<ActiveStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
