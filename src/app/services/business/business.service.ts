import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,  Observable } from 'rxjs';
import { Business } from '../../interfaces/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private businessURL = "http://localhost:3000/businesses";

  constructor(private http: HttpClient) { }

  getBusinesses(): Observable<Business[]> {
    return this.http.get<Business[]>(`${this.businessURL}/all`);
  }

  getBusinessById(id: number): Observable<Business> {
    return this.http.get<Business>(`${this.businessURL}/${id}`);
  }
}
