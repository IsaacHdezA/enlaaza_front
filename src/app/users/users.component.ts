import { Component, OnInit } from '@angular/core';

import { UserCardComponent } from '../components/user-card/user-card.component';
import { User } from '../interfaces/user';
import { UserService } from '../services/users/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserCardComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  getUsers(): void {
    this.userService.getUsers()
                    .subscribe(response => {
                      this.users = response;
                    });
  }

  getUserById(id: number | undefined): void {
    if(typeof id === "number")
      this.userService.getUserById(id).subscribe(response => {
        // @ts-ignore
        console.log(response[0]);
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onClick(user: User): void {
    this.router.navigate([`users/${user.userId}`]);
  }
}
