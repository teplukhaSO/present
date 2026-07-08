import { Component, EventEmitter, Output } from '@angular/core';

interface Option {
  text: string;
  correct: boolean;
}

@Component({
  selector: 'app-bug-hunt-challenge',
  standalone: true,
  imports: [],
  host: { class: 'challenge-card' },
  templateUrl: './bug-hunt-challenge.component.html',
  styleUrl: './bug-hunt-challenge.component.scss'
})
export class BugHuntChallengeComponent {
  @Output() solved = new EventEmitter<void>();

  readonly snippet = `function getTotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price;
  }
  return total;
}`;

  readonly options: Option[] = [
    { text: 'let total = 0;', correct: false },
    { text: 'for (let i = 0; i <= items.length; i++) {', correct: true },
    { text: 'total += items[i].price;', correct: false },
    { text: 'return total;', correct: false }
  ];

  selected: Option | null = null;

  select(option: Option): void {
    this.selected = option;
    if (option.correct) {
      setTimeout(() => this.solved.emit(), 400);
    }
  }
}
