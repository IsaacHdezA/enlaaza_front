import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../../interfaces/vacancy';
import { Business } from '../../interfaces/business';

@Injectable({
	providedIn: 'root'
})
export class VacancyService {
	private vacancyURL = "http://localhost:3000/vacancies";
	constructor(private http: HttpClient) {
		console.log("Ramiro from vacancy");
	}

	getVacancies(): Observable<(Vacancy & Business)[]> {
		return this.http.get<Vacancy[]>(`${this.vacancyURL}/all`) as Observable<(Vacancy & Business)[]>;
	}

	getVacancyById(id: number): Observable<Vacancy> {
		return this.http.get<Vacancy>(`${this.vacancyURL}/${id}`);
	}
}