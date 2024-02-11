import { Component } from '@angular/core';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignInFormComponent, SignUpFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showLogin = true;

  toggleForm() {
    this.showLogin = !this.showLogin;
  }

}
