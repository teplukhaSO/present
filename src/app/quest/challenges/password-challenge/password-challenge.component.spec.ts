import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChallengeComponent } from './password-challenge.component';

describe('PasswordChallengeComponent', () => {
  let component: PasswordChallengeComponent;
  let fixture: ComponentFixture<PasswordChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
