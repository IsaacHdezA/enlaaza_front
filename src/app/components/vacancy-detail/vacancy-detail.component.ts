
import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { Vacancy } from '../../interfaces/vacancy';
import { VacancyService } from '../../services/vacancies/vacancy.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Business } from '../../interfaces/business';

@Component({
  selector: 'app-vacancy-detail',
  standalone: true,
  imports: [UpperCasePipe, RouterLink],
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['../../app.component.css', './vacancy-detail.component.css']
})
export class VacancyDetailComponent implements OnInit {
  id: number | null = null;
  vacancy: Vacancy | null = null;

  weekDays: string[] = [
    '',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  constructor(
    private vacancyService: VacancyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getVacancy(id: number): void {
    this.vacancyService.getVacancyById(id).subscribe(response => {
      this.vacancy = response as (Vacancy & Business);
      if(!this.vacancy) this.router.navigate(["**"]);
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") as number | null;
    this.getVacancy(this.id as number);
  }
}