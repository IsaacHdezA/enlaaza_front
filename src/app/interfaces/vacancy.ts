export interface Vacancy {
  fechaRegistro: Date;
  vigencia: string;
  nombreEmpresa: string;
  rfcEmpresa: string;
  emailEmpresa: string;
  vacanteMatriz: string;
  municipio: string;
  calle: string;
  numero: string;
  colonia: string;
  escolaridad: string;
  estatus: string;

  nombreVacante: string;
  area: string;
  tipoEmpleo: string;
  tipoContrato: string;
  modalidad: string;
  diasLaborales: number[];
  horario: string;
  nivelPuesto: string;
  prestaciones: string[];
  discapacidadesAceptables: string[];
  edadMin: number;
  edadMax: number;
  experiencia: string;
  idiomas: string[];
  habilidadesBlandas: string[];
  habilidadesTecnicas: string[];
  disponibilidadViaje: boolean;
  disponibilidadRadicar: boolean;
  tipoLicencia: string;
  postulaciones: number;

  telefonoEmpresa?: string;
  contactoDirecto?: string;
  emailContactoDirecto?: string;
  telefonoContactoDirecto?: string;
  descripcion?: string;
  causaVacante?: string;
  numPlazas?: number;
  salarioMin?: string;
  salarioMax?: string;
  periodoPago?: string;
  tipoSueldo?: string;
  generoPreferible?: string;

  calificacion: number;
}
