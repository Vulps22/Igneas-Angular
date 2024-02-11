import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse } from './interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  user = {
    login: (data: any) => { return this.post('/api/user/login', data) },
    register: (data: any) => { return this.post('/api/user/create', data)},
  };
  profile = [];
  messenger = [];

  private post(url: string, data: any): Observable<ApiResponse> {

    return this.http.post(url, data).pipe(
      map(response => response as ApiResponse)
    );

  }

  private get(url: string): Observable<ApiResponse> {

    return this.http.get(url).pipe(
      map(response => response as ApiResponse)
    );
  }


}