import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse } from './interfaces/api-response';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiurl = environment.serverUrl;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  auth = {
    verify: () => { return this.get('/api/auth/verify') },
    destroy: () => { return this.delete('/api/auth/destroy') },
  };
  user = {
    login: (data: any) => { return this.post('/api/user/login', data) },
    register: (data: any) => { return this.post('/api/user/create', data) },
  };
  profile = {
    list: () => { return this.get('/api/profile/list') },
    get: (id: string | number) => { return this.get(`/api/profile/${id}`) },
    saveUserProfile: (data: any) => { return this.post('/api/profile/save', data) },
    saveUserProfileImage: (data: FormData) => { return this.post('/api/profile/save_profile_image', data, true) },
    deleteUserProfileImage: (position: number) => { return this.delete(`/api/profile/delete_profile_image?position=${position}`) },

  };

  messenger = [];

  private post(url: string, data: JSON | FormData, usingFormData = false): Observable<ApiResponse> {
    const headers = this.refreshHeaders(usingFormData);

    return this.http.post(this.apiurl + url, data, { headers: headers }).pipe(
      map(response => response as ApiResponse)
    );

  }

  private put(url: string, data: JSON | FormData, usingFormData = false): Observable<ApiResponse> {

    const headers = this.refreshHeaders(usingFormData);

    return this.http.put(this.apiurl + url, data, { headers: headers }).pipe(
      map(response => response as ApiResponse)
    );

  }

  private patch(url: string, data: JSON | FormData, usingFormData = false): Observable<ApiResponse> {

    const headers = this.refreshHeaders(usingFormData);

    return this.http.patch(this.apiurl + url, data, { headers: headers }).pipe(
      map(response => response as ApiResponse)
    );

  }

  private get(url: string): Observable<ApiResponse> {

    const headers = this.refreshHeaders();


    return this.http.get(this.apiurl + url, { headers: headers }).pipe(
      map(response => response as ApiResponse)
    );
  }

  /**
   * 
   * @param url The URL to execute the DELETE request
   * Parameters should be included in the URL
   */
  private delete(url: string) {
    const headers = this.refreshHeaders();
    return this.http.delete(this.apiurl + url, { headers: headers }).pipe(
      map(response => response as ApiResponse)
    );
  }

  private refreshHeaders(usingFormData = false): HttpHeaders {

    const token = this.cookieService.get('authentication');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    if (!usingFormData) headers = headers.append('Content-Type', 'application/json')
    return headers
  }

}