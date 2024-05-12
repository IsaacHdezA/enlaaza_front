import { Observable } from "rxjs";
import { Pager } from "../../interfaces/pager";
import { InjectionToken } from "@angular/core";

export const PAGER_SERVICE_TOKEN = new InjectionToken<PagerService>("PAGER SERVICE TOKEN");

export abstract class PagerService {
	readonly url: string;

	constructor(url: string) { this.url = url; }

	abstract getPage<T>(itemsPerPage: number, page: number): Observable<Pager<T>>;
}