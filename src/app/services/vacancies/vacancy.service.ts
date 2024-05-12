import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../../interfaces/vacancy';
import { Business } from '../../interfaces/business';
import { Pager } from '../../interfaces/pager';

@Injectable({
	providedIn: 'root'
})
export class VacancyService {
	private vacancyURL = "http://localhost:3000/vacancies";
	constructor(private http: HttpClient) {}

	getVacancies(itemsPerPage: number = 10, page: number = 1): Observable<Pager<Vacancy>> {
		return this.http.get<Pager<Vacancy>>(`${this.vacancyURL}/all/${itemsPerPage}/${page}`) as Observable<Pager<Vacancy>>;
	}

	getVacancyById(id: number): Observable<Vacancy> {
		return this.http.get<Vacancy>(`${this.vacancyURL}/${id}`);
	}
}