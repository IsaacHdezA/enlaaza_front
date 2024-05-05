import { Component, Input } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-vacancy-detail-card',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './vacancy-detail-card.component.html',
  styleUrl: './vacancy-detail-card.component.css',
})
export class VacancyDetailCardComponent {
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