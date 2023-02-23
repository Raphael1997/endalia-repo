import { Injectable } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, of } from 'rxjs';
import { IEmployees } from '../interfaces/IEmployess';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }


  /* Mock Employees */

  private dataEmployess: IEmployees[] = [
    {
      fullName: 'Ariza Hidalo, Ignacio',
      job: 'Auditor de Medioambiente',
      telephone: '6781696232',
      email: 'prueba@endalia.com',
      image: '',
    },
    {
      fullName: 'Abad Jiménez, Ignacio',
      job: 'Responsable de Desarrollo de RRHH',
      telephone: '61744290',
      email: 'prueba@endalia.com',
      image: '',
    },
    {
      fullName: 'Aguirre Rivera, Miguel Ángel',
      job: 'Direccion Comercial',
      telephone: '34871575',
      email: 'prueba@endalia.com',
      image: '',
    },
    {
      fullName: 'Alcalá Ordoñez, Ángela',
      job: 'Administrativo/a',
      telephone: '28322925',
      email: 'prueba@endalia.com',
      image: '',
    },
    {
      fullName: 'Aparicio Herrero, Vicente',
      job: 'Coordinador de Ventas Zona Norte',
      telephone: '28322925',
      email: 'prueba@endalia.com',
      image: '',
    },
    {
      fullName: 'Antón Teruel, Pedro',
      job: 'Operario Sección 2 Turno Tarde',
      telephone: '28322925',
      email: 'prueba@endalia.com',
      image: '',
    },
    {
      fullName: 'Aguirre León, Verónica',
      job: 'Operario Sección 1',
      telephone: '6781696',
      email: 'prueba@endalia.com',
      image: '',
    },
    {
      fullName: 'Ariza Franco, Juan Pedro',
      job: 'Responsable de Proyecto',
      telephone: '28322925',
      email: 'prueba@endalia.com',
      image: '',
    },
    {
      fullName: 'Alcalá Herrera, Carlos',
      job: 'Auditor de Medioambiente / Encargado de Producción',
      telephone: '4727825',
      email: 'prueba@endalia.com',
      image: '',
    },
    {
      fullName: 'Alvarez Penida, Laura',
      job: 'Auditor de Calidad',
      telephone: '28322925',
      email: 'prueba@endalia.com',
      image: '',
    }
  ];

  /**
   * @returns An Observable of an array of IEmployees
   */
  getEmployees(): Observable<IEmployees[]> {
    this.orderListEmployessByFullName();
    return of(this.dataEmployess);
  }


  searchEmployees(searchTerm: string): Observable<IEmployees[]> {

    let filteredEmployees = this.dataEmployess.filter(employee =>
      employee.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.telephone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    this.orderListEmployessByFullName();

    return of(filteredEmployees);
  }

  private orderListEmployessByFullName(): void {
    this.dataEmployess.sort(function (a, b) {
      if (a.fullName < b.fullName)
        return -1;
      else if (a.fullName > b.fullName)
        return 1;
      else
        return 0;
    });
  }
}
