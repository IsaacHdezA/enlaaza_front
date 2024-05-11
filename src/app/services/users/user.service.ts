import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userURL = "http://localhost:3000/users";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userURL}/all`).pipe(
      map(response => response)
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.userURL}/${id}`).pipe(
      map(response => response)
    );
  }
}
