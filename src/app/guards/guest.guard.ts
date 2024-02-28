import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { map } from 'rxjs';

/**
 * For Publicly acessible componented only: Ensure the user is redirected to /home if they are logged in
 * @param route 
 * @param state 
 * @returns 
 */
export const guestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService)
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    router.navigate(['/home']);
    return false;
  } else {
    //service may not have run initial auth, try to authenticate
    return authService.authenticate().pipe(
      map((data) => {
        const authenticated = data.response === 'success';
        if(authenticated) {
          router.navigate(['/home']);
          return false;
        }
        return true;
      })
    );
  }
};
