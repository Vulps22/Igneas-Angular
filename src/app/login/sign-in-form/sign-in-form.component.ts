import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { ApiResponse } from '../../interfaces/api-response';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../../services/notification/notification.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.css'
})
export class SignInFormComponent {

  shouldDisable = environment.disableSignIn;
  discordUrl = environment.discordUrl;


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

            this.router.navigate(['home']);
          }
        })
      }
    })

  }

}
