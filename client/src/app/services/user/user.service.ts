import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'http://localhost:5165/api/users';

  constructor(private httpClient: HttpClient) {}

  fetchUsers() {
    return this.httpClient.get<UserResponse>(this.API_URL);
  }
}
