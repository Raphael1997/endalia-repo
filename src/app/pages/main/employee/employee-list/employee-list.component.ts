import { Component, OnInit } from '@angular/core';
import { IEmployes } from 'src/app/shared/interfaces/IEmployess';
import { Employees } from 'src/app/shared/models/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  service: IEmployes[] = [];
  ngOnInit(): void {

    this.service = Employees;
  }

}
