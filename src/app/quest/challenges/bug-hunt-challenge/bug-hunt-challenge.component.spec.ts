import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugHuntChallengeComponent } from './bug-hunt-challenge.component';

describe('BugHuntChallengeComponent', () => {
  let component: BugHuntChallengeComponent;
  let fixture: ComponentFixture<BugHuntChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BugHuntChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BugHuntChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
