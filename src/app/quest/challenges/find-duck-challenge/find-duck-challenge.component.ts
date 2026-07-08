import { Component, EventEmitter, Output } from '@angular/core';

const DECOYS = ['🐤', '🐣', '🐧', '🦉', '🦢', '🕊️', '🦩', '🐥'];
const GRID_SIZE = 16;

@Component({
  selector: 'app-find-duck-challenge',
  standalone: true,
  imports: [],
  host: { class: 'challenge-card' },
  templateUrl: './find-duck-challenge.component.html',
  styleUrl: './find-duck-challenge.component.scss'
})
export class FindDuckChallengeComponent {
  @Output() solved = new EventEmitter<void>();

  readonly duckIndex = Math.floor(Math.random() * GRID_SIZE);
  readonly tiles: string[] = Array.from({ length: GRID_SIZE }, (_, i) =>
    i === this.duckIndex ? '🦆' : DECOYS[Math.floor(Math.random() * DECOYS.length)]
  );

  wrongIndex: number | null = null;

  select(index: number): void {
    if (index === this.duckIndex) {
      this.solved.emit();
      return;
    }

    this.wrongIndex = index;
    setTimeout(() => {
      this.wrongIndex = null;
    }, 300);
  }
}
