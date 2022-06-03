import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouStateComponent } from './thank-you-state.component';

describe('ThankYouStateComponent', () => {
  let component: ThankYouStateComponent;
  let fixture: ComponentFixture<ThankYouStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
