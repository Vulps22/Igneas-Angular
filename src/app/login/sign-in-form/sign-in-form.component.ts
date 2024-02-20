import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
import { ApiResponse } from '../../interfaces/api-response';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../../notification.service';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';

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

  constructor(private apiService: ApiService, private cookieService: CookieService, private notificationService: NotificationService, private authenticationService: AuthenticationService, private router: Router) { }

  showRegisterForm() {
    this.willRegister.emit();
  }

  doLogin() {

    if (!this.email || !this.password) return;

    this.apiService.user.login({ email: this.email, password: this.password }).subscribe((data: ApiResponse) => {
      if(data.response === 'success') {
        this.authenticationService.authenticate(data.data).subscribe((data: ApiResponse) => {
          if(data.response === 'error') this.notificationService.error('Access Denied', data.data.error);
          else{
            console.log('Success!');
            this.router.navigate(['home']);
          }
        })
      }
    })

  }

}
