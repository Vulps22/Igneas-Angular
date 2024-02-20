import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { NotificationService } from './notification.service';
import { ApiService } from './api.service';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

export function initializeUserData(apiService: ApiService, authenticationService: AuthenticationService) {
  console.log('INITIALISE');
  return (): Observable<any> => authenticationService.authenticate();
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([BrowserAnimationsModule]),
    CookieService,
    MessageService,
    NotificationService,
    {
      provide: [APP_INITIALIZER],
      useFactory: initializeUserData,
      multi: true,
      deps: [ApiService, AuthenticationService],
    },
  ],
};
