import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/types/auth.type';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
})
export class UserCardComponent implements OnInit {
  @Input() user!: User;

  ngOnInit(): void {
    console.log(this.user);
  }
}
