import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonSaysChallengeComponent } from './simon-says-challenge.component';

describe('SimonSaysChallengeComponent', () => {
  let component: SimonSaysChallengeComponent;
  let fixture: ComponentFixture<SimonSaysChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimonSaysChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimonSaysChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
