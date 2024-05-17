import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Vacancy } from '../interfaces/vacancy';
import { VacancyCardComponent } from '../components/vacancy-card/vacancy-card.component';
import { VacancyDetailCardComponent } from '../components/vacancy-detail-card/vacancy-detail-card.component';
import { VacancyService } from '../services/vacancies/vacancy.service';

import { Pager } from '../interfaces/pager';
import { PagerComponent } from '../components/pager/pager.component';
import { PAGER_SERVICE_TOKEN, PagerService } from '../services/pager/pager.service';


@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [
    PagerComponent,
    VacancyCardComponent,
    VacancyDetailCardComponent,
    CommonModule,
    RouterLink,
  ],
  providers: [
    {
      provide: PAGER_SERVICE_TOKEN,
      useExisting: VacancyService
    }
  ],
  templateUrl: './vacancies.component.html',
  styleUrls: ['../app.component.css', './vacancies.component.css'],
})
export class VacanciesComponent implements OnInit {
  itemsPerPage: number = 10;
  currentPage: number = 1;
  pager?: Pager<Vacancy> = new Pager<Vacancy>;

  selected?: Vacancy = undefined;
  detailsFixed: boolean = false;
  loading: boolean = true;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if(window.scrollY > 60) this.detailsFixed = true;
    else this.detailsFixed = false;
  }
  constructor(@Inject(PAGER_SERVICE_TOKEN) private vacancyService: VacancyService) {}

  getVacancies(itemsPerPage: number = this.itemsPerPage, page: number = 1): void {
    this.vacancyService.getPage<Vacancy>(itemsPerPage, page).subscribe(response => {
      this.pager = response;

      if(this.pager.data.length > 0) this.selected = this.pager.data[0];
      this.loading = false;
    })
  }

  // Events
  onClick(vacancy: Vacancy): void {
    this.selected = vacancy;
  }

  // Life-cycle management
  ngOnInit(): void {
    this.getVacancies();
  }
}
