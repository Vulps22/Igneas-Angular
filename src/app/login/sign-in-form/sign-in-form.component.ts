import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../api.service';
import { ApiResponse } from '../../interfaces/api-response';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.css'
})
export class SignInFormComponent {


  @Output() willRegister = new EventEmitter<void>();


  email = '';
  password = ''

  constructor(private apiService: ApiService) { }

  showRegisterForm() {
    this.willRegister.emit();
  }

  doLogin() {

    if (!this.email || !this.password) return;

    this.apiService.user.login({ email: this.email, password: this.password }).subscribe((data: ApiResponse) => {
      console.log(data);
    })

  }

}
