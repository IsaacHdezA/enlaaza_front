import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { UserCardComponent } from '../components/user-card/user-card.component';
import { User } from '../interfaces/user';
import { UserService } from '../services/users/user.service';

import { Pager } from '../interfaces/pager';
import { PagerComponent } from '../components/pager/pager.component';
import { PAGER_SERVICE_TOKEN, PagerService } from '../services/pager/pager.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserCardComponent, CommonModule, PagerComponent],
  providers: [
    {
      provide: PAGER_SERVICE_TOKEN,
      useExisting: UserService
    }
  ],
  templateUrl: './users.component.html',
  styleUrls: ['../app.component.css', './users.component.css'],
})
export class UsersComponent implements OnInit {
  itemsPerPage: number = 10;
  currentPage: number = 1;
  pager?: Pager<User> = new Pager<User>();

  constructor(
    @Inject(PAGER_SERVICE_TOKEN) private userService: UserService,
    private router: Router
  ) {}

  getUsers(itemsPerPage: number = this.itemsPerPage, page: number = 1): void {
    this.userService.getPage<User>(itemsPerPage, page).subscribe(response => {
      this.pager = response;
    });
  }

  getUserById(id: number | undefined): void {
    if(typeof id === "number")
      this.userService.getUserById(id).subscribe(response => {
        console.log(response);
      });
  }

  onClick(user: User): void {
    this.router.navigate([`users/${user.userId}`]);
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
