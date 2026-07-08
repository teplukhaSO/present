import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckFixChallengeComponent } from './duck-fix-challenge.component';

describe('DuckFixChallengeComponent', () => {
  let component: DuckFixChallengeComponent;
  let fixture: ComponentFixture<DuckFixChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuckFixChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuckFixChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
