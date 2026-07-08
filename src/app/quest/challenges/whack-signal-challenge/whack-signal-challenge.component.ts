import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

const GRID_SIZE = 9;
const TARGET_HITS = 5;
const LIT_DURATION_MS = 850;
const MIN_GAP_MS = 300;
const MAX_GAP_MS = 700;

@Component({
  selector: 'app-whack-signal-challenge',
  standalone: true,
  imports: [],
  host: { class: 'challenge-card' },
  templateUrl: './whack-signal-challenge.component.html',
  styleUrl: './whack-signal-challenge.component.scss'
})
export class WhackSignalChallengeComponent implements OnInit, OnDestroy {
  @Output() solved = new EventEmitter<void>();

  readonly targetHits = TARGET_HITS;
  readonly gridIndices = Array.from({ length: GRID_SIZE }, (_, i) => i);

  litIndex: number | null = null;
  hits = 0;

  private lastIndex: number | null = null;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.scheduleNext();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  hit(index: number): void {
    if (index !== this.litIndex) {
      return;
    }

    clearTimeout(this.timer);
    this.litIndex = null;
    this.hits++;

    if (this.hits >= this.targetHits) {
      this.solved.emit();
      return;
    }

    this.scheduleNext();
  }

  private scheduleNext(): void {
    const gap = MIN_GAP_MS + Math.random() * (MAX_GAP_MS - MIN_GAP_MS);

    this.timer = setTimeout(() => {
      let next = Math.floor(Math.random() * GRID_SIZE);
      while (next === this.lastIndex) {
        next = Math.floor(Math.random() * GRID_SIZE);
      }
      this.lastIndex = next;
      this.litIndex = next;

      this.timer = setTimeout(() => {
        this.litIndex = null;
        this.scheduleNext();
      }, LIT_DURATION_MS);
    }, gap);
  }
}
