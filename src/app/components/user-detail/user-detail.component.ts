import { Component, OnInit } from '@angular/core';

import { User } from '../../interfaces/user';
import { UserService } from '../../services/users/user.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user-detail.component.html',
  styleUrls: ['../../app.component.css', './user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  id: number | null = null;
  user: User | undefined = undefined;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getUser(id: number): void {
    this.userService.getUserById(id).subscribe(response => {
      this.user = response;

      if(!this.user) this.router.navigate(["**"]);
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as number | null;
    this.getUser(this.id as number);
  }
}
