import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, tap } from 'rxjs';
import { ApiResponse } from './interfaces/api-response';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedIn = false;

  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  /**
   * retrieve the 'authToken' cookie and send it to apiService.auth.verify. Save the response to user
   */
  authenticate(token: any | undefined): Observable<ApiResponse> {
    if (token) this.setToken(token.token);
    return this.apiService.auth.verify().pipe(
      tap(data => {
        console.log(data);
        if (data.response === 'success') {
          this.isLoggedIn = true;
          this.refreshToken();
        } else {
          this.isLoggedIn = false;
          this.forgetToken();
        }
      })
    );
  }

  private setToken(token: string) {
    if (!token) return;
    this.cookieService.set('authentication', token, 30, undefined, undefined, true);
  }

  /**
   * Add another 30 days to the token's cookie
   */
  private refreshToken() {
    const token = this.cookieService.get('authentication');
    if (!token) return;
    this.cookieService.set('authentication', token, 30, undefined, undefined, true);

  }

  /**
   * remove the token from the cookies
   */
  forgetToken() {
    this.cookieService.delete('authentication');
  }

  /**
   * retrieve a list of tokens for the authenticated user
   */
  tokenList() { }

  /**
   * instruct the backend to destroy the specified token 
   */
  destroyToken(token: string) {

  }



}
