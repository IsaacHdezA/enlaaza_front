import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrls: ['../../app.component.css', './user-card.component.css'],
})
export class UserCardComponent {
  @Input() user?: User;
}
