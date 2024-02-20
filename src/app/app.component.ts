import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarGuestComponent } from './navbar/navbar-guest/navbar-guest.component';
import { CommonModule } from '@angular/common';
import { NavbarMemberComponent } from './navbar/navbar-member/navbar-member.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NavbarGuestComponent, NavbarMemberComponent, CommonModule, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Igneas';

  constructor(private messageService: MessageService, private cookieService: CookieService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url) {
      const token = this.cookieService.get('authentication');
      if (token) this.authService.authenticate(token).subscribe(data => {
        if (data.response === 'success') this.router.navigate(['/home']);
      })
    }
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
