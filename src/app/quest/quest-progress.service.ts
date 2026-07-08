import { Injectable, signal } from '@angular/core';
import { TOTAL_STEPS } from './quest.model';

const STORAGE_KEY = 'quest-progress';

@Injectable({ providedIn: 'root' })
export class QuestProgressService {
  readonly completedSteps = signal<number>(this.readStoredProgress());

  get nextStep(): number {
    return Math.min(this.completedSteps() + 1, TOTAL_STEPS);
  }

  isUnlocked(step: number): boolean {
    return step <= this.completedSteps() + 1;
  }

  complete(step: number): void {
    if (step > this.completedSteps()) {
      this.completedSteps.set(step);
      localStorage.setItem(STORAGE_KEY, String(step));
    }
  }

  reset(): void {
    this.completedSteps.set(0);
    localStorage.removeItem(STORAGE_KEY);
  }

  private readStoredProgress(): number {
    const stored = Number(localStorage.getItem(STORAGE_KEY));
    return Number.isFinite(stored) ? Math.min(Math.max(stored, 0), TOTAL_STEPS) : 0;
  }
}
