import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatrixBackgroundComponent } from '../../shared/matrix-background/matrix-background.component';
import { QuestProgressService } from '../../quest/quest-progress.service';
import { GIFTS, TOTAL_STEPS } from '../../quest/quest.model';

const DOT_MOVE_INTERVAL_MS = 1256;
const DOT_EDGE_MARGIN_PERCENT = 8;

@Component({
  selector: 'app-finish',
  standalone: true,
  imports: [MatrixBackgroundComponent],
  templateUrl: './finish.component.html',
  styleUrl: './finish.component.scss'
})
export class FinishComponent implements OnDestroy {
  readonly gifts = GIFTS;

  dotX = 50;
  dotY = 50;

  private readonly moveTimer: ReturnType<typeof setInterval>;

  constructor(
    private readonly router: Router,
    questProgress: QuestProgressService
  ) {
    if (questProgress.completedSteps() < TOTAL_STEPS) {
      router.navigate(['/quest', questProgress.nextStep], { replaceUrl: true });
    }

    this.moveDot();
    this.moveTimer = setInterval(() => this.moveDot(), DOT_MOVE_INTERVAL_MS);
  }

  ngOnDestroy(): void {
    clearInterval(this.moveTimer);
  }

  catchDot(): void {
    clearInterval(this.moveTimer);
    this.router.navigate(['/thanks']);
  }

  private moveDot(): void {
    const range = 100 - DOT_EDGE_MARGIN_PERCENT * 2;
    this.dotX = DOT_EDGE_MARGIN_PERCENT + Math.random() * range;
    this.dotY = DOT_EDGE_MARGIN_PERCENT + Math.random() * range;
  }
}
