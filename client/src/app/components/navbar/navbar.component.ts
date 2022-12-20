import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isdropMenu = false;

  dropdownList = [
    { name: 'Matches', link: 'matches' },
    { name: 'Lists', link: 'lists' },
    { name: 'Messages', link: 'messages' },
    { name: 'Log in', link: 'login' },
    { name: 'Sign up', link: 'signup' },
  ];

  constructor() {}

  onClick() {
    this.isdropMenu = !this.isdropMenu;
  }
}
