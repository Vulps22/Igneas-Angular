import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarGuestComponent } from './navbar/navbar-guest/navbar-guest.component';
import { CommonModule } from '@angular/common';
import { NavbarMemberComponent } from './navbar/navbar-member/navbar-member.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NavbarGuestComponent, NavbarMemberComponent, CommonModule, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Igneas';

  constructor(private messageService: MessageService){}

  isLoggedIn() {
    return false;
  }

}
