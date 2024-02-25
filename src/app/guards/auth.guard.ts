import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService)
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    return true;
  } else {
    //service may not have run initial auth, try to authenticate
    return authService.authenticate().pipe(
      map((data) => {
        const authenticated = data.response === 'success';
        if(!authenticated) {
          router.navigate(['/']);
          return false;
        }
        return true;
      })
    );
  }
};
