import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Vacancy } from '../interfaces/vacancy';
import { VacancyCardComponent } from '../components/vacancy-card/vacancy-card.component';
import { VacancyDetailComponent } from '../components/vacancy-detail/vacancy-detail.component';
import { VacancyService } from '../services/vacancies/vacancy.service';

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [VacancyCardComponent, VacancyDetailComponent, CommonModule],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css',
})
export class VacanciesComponent {
  vacancies: Vacancy[] = [];
  selected?: Vacancy = undefined;

  constructor(private vacancyService: VacancyService) {}

  onClick(vacancy: Vacancy): void {
    this.selected = vacancy;
    console.log(this.selected);
  }

  getVacancies(): void {
    this.vacancyService.getVacancies().subscribe(response => {
      this.vacancies = response;

      if(this.vacancies.length > 0) this.selected = this.vacancies[0];
    })
  }

  ngOnInit(): void {
    this.getVacancies();
  }
}
