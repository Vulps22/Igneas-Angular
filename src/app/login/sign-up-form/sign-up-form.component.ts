import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToastModule } from 'primeng/toast';
import { NotificationService } from '../../notification.service';
import { AuthenticationService } from '../../authentication.service';
import { ApiResponse } from '../../interfaces/api-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [FormsModule, ToastModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})

export class SignUpFormComponent {
  @Output() willLogin = new EventEmitter<void>();

  email = '';
  password = '';
  confirmPassword = '';
  dob = '';

  constructor(private apiService: ApiService, private cookieService: CookieService, private notificationService: NotificationService, private authenticationService: AuthenticationService, private router: Router) { }

  showLoginForm() {
    this.willLogin.emit();
  }

  doRegister() {

    if (!(this.email && this.password && this.confirmPassword && this.dob)) return;
    this.apiService.user.register({
      email: this.email,
      password: this.password,
      date_of_birth: this.dob,
    }).subscribe(data => {
      if (data.response === 'success') {

        this.authenticationService.authenticate(data.data).subscribe((data: ApiResponse) => {
          if (data.response === 'error') this.notificationService.error('Access Denied: ', data.data.error);
          else {
            this.router.navigate(['home']);
          }
        })
      }
      else this.notificationService.error('Error', data.data.error);
    })
  }

}
