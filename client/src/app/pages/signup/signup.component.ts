import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  username!: string;
  email!: string;
  password!: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.username);
  }
}
