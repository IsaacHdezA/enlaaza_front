import { Component, Input } from '@angular/core';

import { Vacancy } from '../../interfaces/vacancy';

@Component({
  selector: 'app-vacancy-card',
  standalone: true,
  imports: [],
  templateUrl: './vacancy-card.component.html',
  styleUrl: './vacancy-card.component.css',
})
export class VacancyCardComponent {
  @Input() vacancy?: Vacancy;

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
}
