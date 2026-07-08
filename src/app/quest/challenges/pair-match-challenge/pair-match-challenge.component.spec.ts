import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairMatchChallengeComponent } from './pair-match-challenge.component';

describe('PairMatchChallengeComponent', () => {
  let component: PairMatchChallengeComponent;
  let fixture: ComponentFixture<PairMatchChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PairMatchChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PairMatchChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
