import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse } from './interfaces/api-response';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  auth = {
    verify: () => { return this.get('/api/auth/verify') },
  };
  user = {
    login: (data: any) => { return this.post('/api/user/login', data) },
    register: (data: any) => { return this.post('/api/user/create', data) },
  };
  profile = [];
  messenger = [];

  private post(url: string, data: any): Observable<ApiResponse> {

    const headers = this.refreshHeaders();

    return this.http.post(url, data, { headers: headers }).pipe(
      map(response => response as ApiResponse)
    );

  }

  private get(url: string): Observable<ApiResponse> {

    const headers = this.refreshHeaders();


    return this.http.get(url, { headers: headers }).pipe(
      map(response => response as ApiResponse)
    );
  }

  private refreshHeaders(): HttpHeaders {

    const token = this.cookieService.get('authentication');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
  });
    return headers
  }

}