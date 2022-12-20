import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthResponse, Login } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:5165/api/auth';

  states = new BehaviorSubject({ isAuth: false, user: null });

  constructor(private http: HttpClient, private router: Router) {}

  login(body: Login) {
    return this.http
      .post<AuthResponse>(this.API_URL + '/login', body)
      .subscribe((res) => {
        const token = res.data as string;
        const decoded = this.decodeToken(token);
        this.storeToken(token);

        this.states.next({
          isAuth: true,
          user: decoded,
        });

        this.router.navigateByUrl('');
      });
  }

  logout() {
    this.removeToken();
    this.states.next({
      isAuth: false,
      user: null,
    });
    this.router.navigateByUrl('');
  }

  private storeToken(token: string): void {
    localStorage.clear();
    localStorage.setItem('token', JSON.stringify(token));
  }

  private removeToken(): void {
    const token = JSON.parse(localStorage.getItem('token') as string);
    if (token) localStorage.removeItem('token');
  }

  private decodeToken(token: string) {
    return jwt_decode<any>(token);
  }
}
