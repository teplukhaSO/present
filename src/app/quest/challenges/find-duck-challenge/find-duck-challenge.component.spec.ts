import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDuckChallengeComponent } from './find-duck-challenge.component';

describe('FindDuckChallengeComponent', () => {
  let component: FindDuckChallengeComponent;
  let fixture: ComponentFixture<FindDuckChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindDuckChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindDuckChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
