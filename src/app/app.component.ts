import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { UserCardComponent } from './components/user-card/user-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recommender';
}
