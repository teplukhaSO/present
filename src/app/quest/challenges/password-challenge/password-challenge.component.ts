import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

const PASSWORD = '00ff66';

@Component({
  selector: 'app-password-challenge',
  standalone: true,
  imports: [FormsModule],
  host: { class: 'challenge-card' },
  templateUrl: './password-challenge.component.html',
  styleUrl: './password-challenge.component.scss'
})
export class PasswordChallengeComponent {
  @Output() solved = new EventEmitter<void>();

  answer = '';
  error = false;

  submit(): void {
    if (this.answer.trim().toLowerCase().replace('#', '') === PASSWORD) {
      this.error = false;
      this.solved.emit();
    } else {
      this.error = true;
    }
  }
}
