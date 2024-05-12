import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Vacancy } from '../interfaces/vacancy';
import { VacancyCardComponent } from '../components/vacancy-card/vacancy-card.component';
import { VacancyDetailCardComponent } from '../components/vacancy-detail-card/vacancy-detail-card.component';
import { VacancyService } from '../services/vacancies/vacancy.service';
import { Pager } from '../interfaces/pager';

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [VacancyCardComponent, VacancyDetailCardComponent, CommonModule],
  templateUrl: './vacancies.component.html',
  styleUrls: ['../app.component.css', './vacancies.component.css'],
})
export class VacanciesComponent implements OnInit {
  pager: Pager<Vacancy> | undefined = undefined;

  selected?: Vacancy = undefined;
  detailsFixed: boolean = false;
  loading: boolean = true;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if(window.scrollY > 60) this.detailsFixed = true;
    else this.detailsFixed = false;
  }
  constructor(private vacancyService: VacancyService) {}

  onClick(vacancy: Vacancy): void {
    this.selected = vacancy;
  }

  getVacancies(): void {
    this.vacancyService.getVacancies().subscribe(response => {
      this.pager = response;

      if(this.pager.data.length > 0) this.selected = this.pager.data[0];
      this.loading = false;
    })
  }

  ngOnInit(): void {
    this.getVacancies();
  }
}
