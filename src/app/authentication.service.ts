import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map, tap } from 'rxjs';
import { ApiResponse } from './interfaces/api-response';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn: boolean = false;

  private userId: number | null = null;

  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  /**
   * retrieve the 'authToken' cookie and send it to apiService.auth.verify. Save the response to user
   */
  authenticate(token?: any | undefined): Observable<ApiResponse> {

    if (token) this.setToken(token.token);
    return this.apiService.auth.verify().pipe(
      tap(data => {

        if (data.response === 'success') {
          this.loggedIn = true;
          this.userId = Number(data.data.id);
          this.refreshToken();
        } else {
          this.loggedIn = false;
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


logout(): Observable<boolean> {

  return this.apiService.auth.destroy().pipe(
    map(data => {
      if (data.response === 'success') {
        this.forgetToken();
        this.loggedIn = false;
        this.userId = null;
        return true; // Logout was successful
      } else {
        return false; // Logout failed
      }
    })
  );
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


  isLoggedIn(): boolean{

    return this.loggedIn;
  }

  getUser(){
    if(!this.userId) this.authenticate().subscribe(data => {
      console.log(data);
    })
    return this.userId;
  }


}
