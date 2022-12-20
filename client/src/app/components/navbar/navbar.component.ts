import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuth = true;
  isdropMenu = false;
  isAuthModal = true;

  dropdownList = [
    { name: 'Matches', link: 'matches' },
    { name: 'Lists', link: 'lists' },
    { name: 'Messages', link: 'messages' },
    { name: 'Log in', link: 'login' },
    { name: 'Sign up', link: 'signup' },
  ];

  authDropdownList = [
    { name: 'Matches', link: 'matches' },
    { name: 'Lists', link: 'lists' },
    { name: 'Messages', link: 'messages' },
    { name: 'Settings', link: 'settings' },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.states.subscribe((state) => (this.isAuth = state.isAuth));
  }

  onMenuClick() {
    this.isdropMenu = !this.isdropMenu;
  }

  onUserClick() {
    this.isAuthModal = !this.isAuthModal;
  }
}
