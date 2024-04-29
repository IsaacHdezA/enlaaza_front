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
  vacancies: Vacancy[] = [
    {
      fechaRegistro: new Date('2023-11-13'),
      vigencia: '13-01-2024',
      nombreEmpresa: 'PURIFIKA LEÓN',
      rfcEmpresa: 'PLE070809LG9',
      emailEmpresa: 'rh.leon@purifika.com',
      telefonoEmpresa: '4771381459',
      contactoDirecto: 'Leslie Pérez',
      emailContactoDirecto: 'rh.leon@purifika.com',
      telefonoContactoDirecto: '471381459',
      vacanteMatriz: 'No',
      municipio: 'León de los Aldama',
      calle: 'Boulevard Juan Alonso de Torres Poniente',
      numero: '1401-A',
      colonia: 'Valle del Campestre',
      escolaridad: 'Bachillerato',
      estatus: 'Inactiva',
      nombreVacante: 'Becario de Operaciones (Mantenimiento)',
      descripcion:
        'Estudiantes con seguro facultativo vigente en proceso de estadias profesionales a nivel Bachillerato Técnico o TSU de las carreras de Mecatronica, Electromecanica, Electronica, Mantenimiento Industrial, Procesos Industriales o afin',
      causaVacante: 'Puesto de nueva creación',
      numPlazas: 5,
      area: 'Mantenimiento industrial',
      tipoEmpleo: 'Tiempo completo (8 hrs)',
      tipoContrato: 'Contrato para becario/practicante',
      modalidad: 'Presencial',
      diasLaborales: [1, 2, 3, 4, 5],
      horario: '8:00a.m. - 5:00p.m.',
      salarioMin: '3000',
      salarioMax: '6000',
      periodoPago: 'Mensual',
      tipoSueldo: 'Neto',
      nivelPuesto: 'Becario',
      prestaciones: [
        'Prestaciones de Ley',
        'Flexibilidad de Horario',
        'Capacitación y Entranamiento',
        'Plan de Carrera',
        'Crecimiento',
        'Apoyo con Proyectos',
      ],
      discapacidadesAceptables: [],
      generoPreferible: 'Indistinto',
      edadMin: 17,
      edadMax: 55,
      experiencia: 'Sin experiencia laboral',
      idiomas: ['Español/Nativo'],
      habilidadesBlandas: [
        'Iniciativa',
        'Aprendizaje continuo',
        'Compromiso',
        'Orientación a resultados',
        'Comunicación',
      ],
      habilidadesTecnicas: [
        'Conocimiento mecánico (máquinas y herramientas, incluidos sus usos, reparación y mantenimiento)',
        'Conocimientos en ingeniería industrial y producción',
        'Mantenimiento a elementos mecánicos, mediante proceso de soldadura',
      ],
      disponibilidadViaje: false,
      disponibilidadRadicar: false,
      tipoLicencia: '',
      postulaciones: 4,
      calificacion: 4.3,
    },
    {
      fechaRegistro: new Date('2023-11-15'),
      vigencia: '15-01-2024',
      nombreEmpresa: 'PURIFIKA LEÓN',
      rfcEmpresa: 'PLE070809LG9',
      emailEmpresa: 'rh.leon@purifika.com',
      telefonoEmpresa: '4771381459',
      contactoDirecto: 'Leslie Pérez',
      emailContactoDirecto: 'rh.leon@purifika.com',
      telefonoContactoDirecto: '4771381459',
      vacanteMatriz: 'No',
      municipio: 'León de los Aldama',
      calle: 'Boulevard Juan Alonso de Torres Poniente',
      numero: '1401-A',
      colonia: 'Valle del Campestre',
      escolaridad: 'Licenciatura/Ingeniería',
      estatus: 'Inactiva',
      nombreVacante: 'Practicante de Recusos Humanos',
      descripcion:
        'Como Practicante de Recursos Humanos dará soporte al departamento en sus diferentes procesos como reclutamiento y selección, capacitación, comunicación y eventos corporativos, entre otros. Indispensable Proactividad para proyectos de mejora de procesos del área y con impacto positivo a la compañía. ',
      causaVacante: 'Puesto de nueva creación',
      numPlazas: 1,
      area: 'Recursos humanos',
      tipoEmpleo: 'Medio tiempo (4 hrs)',
      tipoContrato: 'Contrato para becario/practicante',
      modalidad: 'Presencial',
      diasLaborales: [1, 2, 3, 4],
      horario: '8:00a.m. - 5:00p.m.',
      salarioMin: '2000',
      salarioMax: '3000',
      periodoPago: 'Mensual',
      tipoSueldo: 'Neto',
      nivelPuesto: 'Becario',
      prestaciones: [
        'Prestaciones de Ley',
        'Flexibilidad horario',
        'Plan de Desarrollo',
        'Programa de Mentoring',
        'Capacitación constante',
      ],
      discapacidadesAceptables: [],
      generoPreferible: 'Indistinto',
      edadMin: 19,
      edadMax: 25,
      experiencia: 'Menos de 6 meses',
      idiomas: ['Español/Nativo'],
      habilidadesBlandas: [
        'Iniciativa',
        'Comunicación',
        'Pensamiento creativo',
        'Honestidad',
        'Empatía',
        'Resiliencia',
        'Adaptabilidad',
        'Organización',
      ],
      habilidadesTecnicas: [
        'Técnicas de reclutamiento y aplicación de pruebas',
        'Excel Intermedio',
        'Desarrollo organizacional',
      ],
      disponibilidadViaje: false,
      disponibilidadRadicar: false,
      tipoLicencia: '',
      postulaciones: 0,
      calificacion: 3.3,
    },
  ];

  selected?: Vacancy = this.vacancies[0];

  constructor(private vacancyService: VacancyService) {}

  onClick(vacancy: Vacancy): void {
    this.selected = vacancy;
  }

  getVacancies(): void {
    this.vacancyService.getVacancies().subscribe(response => { this.vacancies = response })
  }

  ngOnInit(): void {
    this.getVacancies();
  }
}
