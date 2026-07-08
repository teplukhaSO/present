import { Component, EventEmitter, Output } from '@angular/core';

interface Option {
  text: string;
  correct: boolean;
}

@Component({
  selector: 'app-duck-fix-challenge',
  standalone: true,
  imports: [],
  host: { class: 'challenge-card' },
  templateUrl: './duck-fix-challenge.component.html',
  styleUrl: './duck-fix-challenge.component.scss'
})
export class DuckFixChallengeComponent {
  @Output() solved = new EventEmitter<void>();

  readonly brokenLine = 'if (num % 2 = 0) {';

  readonly options: Option[] = [
    { text: 'if (num % 2 === 0) {', correct: true },
    { text: 'if (num / 2 === 0) {', correct: false },
    { text: 'if (num % 2 == 1) {', correct: false },
    { text: 'if (num = 2 === 0) {', correct: false }
  ];

  selected: Option | null = null;

  select(option: Option): void {
    this.selected = option;
    if (option.correct) {
      setTimeout(() => this.solved.emit(), 400);
    }
  }
}
