import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOrderChallengeComponent } from './number-order-challenge.component';

describe('NumberOrderChallengeComponent', () => {
  let component: NumberOrderChallengeComponent;
  let fixture: ComponentFixture<NumberOrderChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberOrderChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberOrderChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
