import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent {
  @Output() willLogin = new EventEmitter<void>();

  showLoginForm() {
    this.willLogin.emit();
  }

}
