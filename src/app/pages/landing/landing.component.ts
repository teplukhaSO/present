import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatrixBackgroundComponent } from '../../shared/matrix-background/matrix-background.component';
import { QuestProgressService } from '../../quest/quest-progress.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MatrixBackgroundComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  constructor(
    private readonly router: Router,
    private readonly questProgress: QuestProgressService
  ) {}

  start(): void {
    this.router.navigate(['/quest', this.questProgress.nextStep]);
  }
}
