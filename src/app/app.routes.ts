import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VacancyDetailComponent } from './components/vacancy-detail/vacancy-detail.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'vacancy-detail', component: VacancyDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];
