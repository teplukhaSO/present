import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatrixBackgroundComponent } from '../../shared/matrix-background/matrix-background.component';
import { QuestProgressService } from '../../quest/quest-progress.service';
import { GIFTS, Gift, TOTAL_STEPS } from '../../quest/quest.model';
import { DecodeChallengeComponent } from '../../quest/challenges/decode-challenge/decode-challenge.component';
import { BugHuntChallengeComponent } from '../../quest/challenges/bug-hunt-challenge/bug-hunt-challenge.component';
import { SimonSaysChallengeComponent } from '../../quest/challenges/simon-says-challenge/simon-says-challenge.component';
import { PasswordChallengeComponent } from '../../quest/challenges/password-challenge/password-challenge.component';
import { DuckFixChallengeComponent } from '../../quest/challenges/duck-fix-challenge/duck-fix-challenge.component';

@Component({
  selector: 'app-quest-page',
  standalone: true,
  imports: [
    MatrixBackgroundComponent,
    DecodeChallengeComponent,
    BugHuntChallengeComponent,
    SimonSaysChallengeComponent,
    PasswordChallengeComponent,
    DuckFixChallengeComponent
  ],
  templateUrl: './quest-page.component.html',
  styleUrl: './quest-page.component.scss'
})
export class QuestPageComponent implements OnInit, OnDestroy {
  readonly totalSteps = TOTAL_STEPS;
  step = 1;
  gift: Gift = GIFTS[0];
  solved = false;

  private subscription?: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly questProgress: QuestProgressService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.applyStep(Number(params.get('step')));
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onSolved(): void {
    this.questProgress.complete(this.step);
    this.solved = true;
  }

  continue(): void {
    if (this.step >= this.totalSteps) {
      this.router.navigate(['/finish']);
    } else {
      this.router.navigate(['/quest', this.step + 1]);
    }
  }

  private applyStep(step: number): void {
    const isValid = Number.isInteger(step) && step >= 1 && step <= this.totalSteps;
    const target = isValid && this.questProgress.isUnlocked(step) ? step : this.questProgress.nextStep;

    if (target !== step) {
      this.router.navigate(['/quest', target], { replaceUrl: true });
      return;
    }

    this.step = target;
    this.gift = GIFTS[target - 1];
    this.solved = false;
  }
}
