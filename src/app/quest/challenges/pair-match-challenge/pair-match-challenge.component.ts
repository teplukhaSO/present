import { Component, EventEmitter, Output } from '@angular/core';

const SYMBOLS = ['💾', '🔒', '🖥️', '📡', '🛰️', '🔋', '🧬'];

function shuffledTiles(): string[] {
  const pairSymbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
  const tiles = [...SYMBOLS, pairSymbol];

  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }

  return tiles;
}

@Component({
  selector: 'app-pair-match-challenge',
  standalone: true,
  imports: [],
  host: { class: 'challenge-card' },
  templateUrl: './pair-match-challenge.component.html',
  styleUrl: './pair-match-challenge.component.scss'
})
export class PairMatchChallengeComponent {
  @Output() solved = new EventEmitter<void>();

  readonly tiles = shuffledTiles();
  firstIndex: number | null = null;
  wrongPair: number[] | null = null;

  select(index: number): void {
    if (index === this.firstIndex || this.wrongPair) {
      return;
    }

    if (this.firstIndex === null) {
      this.firstIndex = index;
      return;
    }

    if (this.tiles[this.firstIndex] === this.tiles[index]) {
      this.solved.emit();
      return;
    }

    this.wrongPair = [this.firstIndex, index];
    this.firstIndex = null;
    setTimeout(() => {
      this.wrongPair = null;
    }, 400);
  }
}
