import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarGuestComponent } from './navbar/navbar-guest/navbar-guest.component';
import { CommonModule } from '@angular/common';
import { NavbarMemberComponent } from './navbar/navbar-member/navbar-member.component';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NavbarGuestComponent, NavbarMemberComponent, CommonModule, ToastModule, MessagesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Igneas';

  constructor(private messageService: MessageService, private cookieService: CookieService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
