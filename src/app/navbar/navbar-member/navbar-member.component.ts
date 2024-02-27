import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-navbar-member',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-member.component.html',
  styleUrl: './navbar-member.component.css'
})
export class NavbarMemberComponent {

  constructor(private authService: AuthenticationService, private notificationService: NotificationService, private router: Router) { }
  logout() { 
    console.log("Logging Out");
    this.authService.logout().subscribe(data => {
      if(data) this.router.navigateByUrl('/');
      else {
        this.notificationService.error('Logout Failed!', 'A Critical Security Error Has Occured! Please report this bug ASAP');
      }
    })
  }

}
