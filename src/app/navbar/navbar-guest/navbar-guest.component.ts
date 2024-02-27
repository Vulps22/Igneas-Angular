import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar-guest',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './navbar-guest.component.html',
  styleUrl: './navbar-guest.component.css'
})
export class NavbarGuestComponent {

}
