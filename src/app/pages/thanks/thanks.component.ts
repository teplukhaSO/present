import { Component } from '@angular/core';
import { MatrixBackgroundComponent } from '../../shared/matrix-background/matrix-background.component';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [MatrixBackgroundComponent],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.scss'
})
export class ThanksComponent {}
