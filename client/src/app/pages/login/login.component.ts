import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email: string = 'string';
  password: string = 'string';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.authService.login({ email: this.email, password: this.password });
  }
}
