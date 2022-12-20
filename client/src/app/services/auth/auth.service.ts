import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Login } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'https://localhost:4200/api';

  constructor(private http: HttpClient) {}

  login(body: Login) {
    return this.http.post(this.API_URL + '/auth/login', body);
  }
}
