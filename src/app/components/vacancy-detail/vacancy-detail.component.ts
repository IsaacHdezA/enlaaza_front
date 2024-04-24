import { Component, Input } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-vacancy-detail',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './vacancy-detail.component.html',
  styleUrl: './vacancy-detail.component.css',
})
export class VacancyDetailComponent {
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
