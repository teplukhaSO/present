import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatrixBackgroundComponent } from '../../shared/matrix-background/matrix-background.component';
import { QuestProgressService } from '../../quest/quest-progress.service';
import { GIFTS, TOTAL_STEPS } from '../../quest/quest.model';

@Component({
  selector: 'app-finish',
  standalone: true,
  imports: [MatrixBackgroundComponent],
  templateUrl: './finish.component.html',
  styleUrl: './finish.component.scss'
})
export class FinishComponent {
  readonly gifts = GIFTS;

  constructor(router: Router, questProgress: QuestProgressService) {
    if (questProgress.completedSteps() < TOTAL_STEPS) {
      router.navigate(['/quest', questProgress.nextStep], { replaceUrl: true });
    }
  }
}
