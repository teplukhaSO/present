import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

const ENCODED_MESSAGE = 'TUFJTkZSQU1F';
const ANSWER = 'MAINFRAME';

@Component({
  selector: 'app-decode-challenge',
  standalone: true,
  imports: [FormsModule],
  host: { class: 'challenge-card' },
  templateUrl: './decode-challenge.component.html',
  styleUrl: './decode-challenge.component.scss'
})
export class DecodeChallengeComponent {
  @Output() solved = new EventEmitter<void>();

  readonly encoded = ENCODED_MESSAGE;
  answer = '';
  error = false;

  submit(): void {
    if (this.answer.trim().toUpperCase() === ANSWER) {
      this.error = false;
      this.solved.emit();
    } else {
      this.error = true;
    }
  }
}
