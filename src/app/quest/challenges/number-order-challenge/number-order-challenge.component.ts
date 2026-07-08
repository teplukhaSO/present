import { Component, EventEmitter, Output } from '@angular/core';

const GRID_SIZE = 9;

function shuffledNumbers(): number[] {
  const numbers = Array.from({ length: GRID_SIZE }, (_, i) => i + 1);

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers;
}

@Component({
  selector: 'app-number-order-challenge',
  standalone: true,
  imports: [],
  host: { class: 'challenge-card' },
  templateUrl: './number-order-challenge.component.html',
  styleUrl: './number-order-challenge.component.scss'
})
export class NumberOrderChallengeComponent {
  @Output() solved = new EventEmitter<void>();

  readonly numbers = shuffledNumbers();
  nextExpected = 1;
  wrongIndex: number | null = null;

  select(value: number, index: number): void {
    if (value !== this.nextExpected) {
      this.wrongIndex = index;
      setTimeout(() => {
        this.wrongIndex = null;
      }, 250);
      return;
    }

    if (this.nextExpected === GRID_SIZE) {
      this.solved.emit();
    } else {
      this.nextExpected++;
    }
  }
}
