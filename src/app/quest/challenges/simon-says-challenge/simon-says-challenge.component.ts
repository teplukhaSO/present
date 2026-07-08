import { Component, EventEmitter, Output } from '@angular/core';

type Pad = 'green' | 'blue' | 'purple' | 'white';
type Status = 'playing' | 'input';

const SEQUENCE_LENGTH = 4;

@Component({
  selector: 'app-simon-says-challenge',
  standalone: true,
  imports: [],
  host: { class: 'challenge-card' },
  templateUrl: './simon-says-challenge.component.html',
  styleUrl: './simon-says-challenge.component.scss'
})
export class SimonSaysChallengeComponent {
  @Output() solved = new EventEmitter<void>();

  readonly pads: Pad[] = ['green', 'blue', 'purple', 'white'];

  sequence: Pad[] = [];
  playerInput: Pad[] = [];
  activePad: Pad | null = null;
  status: Status = 'playing';
  error = false;

  constructor() {
    this.startRound();
  }

  startRound(): void {
    this.sequence = Array.from(
      { length: SEQUENCE_LENGTH },
      () => this.pads[Math.floor(Math.random() * this.pads.length)]
    );
    this.playerInput = [];
    this.error = false;
    this.status = 'playing';
    this.playSequence();
  }

  press(pad: Pad): void {
    if (this.status !== 'input') {
      return;
    }

    this.playerInput.push(pad);
    const index = this.playerInput.length - 1;

    if (this.sequence[index] !== pad) {
      this.error = true;
      this.status = 'playing';
      return;
    }

    if (this.playerInput.length === this.sequence.length) {
      this.solved.emit();
    }
  }

  private async playSequence(): Promise<void> {
    await this.delay(500);
    for (const pad of this.sequence) {
      this.activePad = pad;
      await this.delay(450);
      this.activePad = null;
      await this.delay(200);
    }
    this.status = 'input';
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
