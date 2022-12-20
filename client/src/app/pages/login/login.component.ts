import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email: string = 'kaung@gmail.com';
  password: string = 'kaung';
  isAuth = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.isAuth = true;
    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe({
        next: (res) => {
          console.log(res);
          this.isAuth = true;
        },
      });
  }
}
