import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService)

  if (authService.isLoggedIn()) {
    return true;
  } else {
    return authService.authenticate().pipe(
      map((data) => data.response === 'success')
    );
  }
};
