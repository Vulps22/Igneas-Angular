import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.serverUrl;

  constructor(private http: HttpClient) { }

  user = {
    login: (data: any) => { return this.post('/user/login', data) },
  };
  profile = [];
  messenger = [];

  private get(url: string) {
    return this.http.get(this.baseUrl + url, {
      withCredentials: true
    });
  }

  private post(url: string, data: any) {
    return this.http.post(this.baseUrl + url, data, {
      withCredentials: true
    });
  }

}