import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodeChallengeComponent } from './decode-challenge.component';

describe('DecodeChallengeComponent', () => {
  let component: DecodeChallengeComponent;
  let fixture: ComponentFixture<DecodeChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecodeChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecodeChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
