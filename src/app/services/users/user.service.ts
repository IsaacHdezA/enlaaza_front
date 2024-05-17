import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../interfaces/user';

import { Pager } from '../../interfaces/pager';
import { PagerService } from '../pager/pager.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends PagerService {
  constructor(private http: HttpClient) {
    super("http://localhost:3000/users");
  }

  getPage<User>(itemsPerPage: number = 10, page: number = 1): Observable<Pager<User>> {
    return this.http.get<Pager<User>>(`${this.url}/all/${itemsPerPage}/${page}`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }


}
