import { Component, OnInit } from '@angular/core';

import { UserCardComponent } from '../components/user-card/user-card.component';
import { User } from '../interfaces/user';
import { UserService } from '../services/users/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserCardComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  getUsers(): void {
    this.userService.getUsers()
                    .subscribe(response => {
                      this.users = response;
                    });
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
