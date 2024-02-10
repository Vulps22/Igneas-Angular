import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: any;

  constructor() { }

  public async login(email: String, password: String) {
    
  }

  public async logout(){}

  private saveToken(token: String) {}
  private deleteToken() {}

}
