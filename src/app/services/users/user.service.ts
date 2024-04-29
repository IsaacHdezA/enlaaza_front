import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userURL = "http://localhost:3000/users";
  constructor(private http: HttpClient) {
    console.log("Ramiro");
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userURL}/all`).pipe(
      map(response => response)
    );
  }
}
