import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatrixBackgroundComponent } from '../../shared/matrix-background/matrix-background.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MatrixBackgroundComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  constructor(private readonly router: Router) {}

  start(): void {
    this.router.navigate(['/quest', 1]);
  }
}
