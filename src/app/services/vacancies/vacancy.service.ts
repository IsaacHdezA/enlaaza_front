import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../../interfaces/vacancy';
import { Pager } from '../../interfaces/pager';
import { PagerService } from '../pager/pager.service';

@Injectable({
	providedIn: 'root'
})
export class VacancyService extends PagerService {
	constructor(private http: HttpClient) {
		super("http://localhost:3000/vacancies");
	}

	getPage<Vacancy>(itemsPerPage: number = 10, page: number = 1): Observable<Pager<Vacancy>> {
		return this.http.get<Pager<Vacancy>>(`${this.url}/all/${itemsPerPage}/${page}`);
	}

	getVacancyById(id: number): Observable<Vacancy> {
		return this.http.get<Vacancy>(`${this.url}/${id}`);
	}
}