import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhackSignalChallengeComponent } from './whack-signal-challenge.component';

describe('WhackSignalChallengeComponent', () => {
  let component: WhackSignalChallengeComponent;
  let fixture: ComponentFixture<WhackSignalChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhackSignalChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhackSignalChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
