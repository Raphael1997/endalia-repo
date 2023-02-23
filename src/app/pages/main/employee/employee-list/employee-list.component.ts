import { Component, EventEmitter, OnInit } from '@angular/core';
import { debounce, debounceTime, EMPTY, timer } from 'rxjs';
import { IEmployees } from 'src/app/shared/interfaces/IEmployess';
import { EmployeeService } from 'src/app/shared/services/employee-service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  _searchKeyUp$ = new EventEmitter<KeyboardEvent>();
  constructor(
    private readonly employeeSV: EmployeeService
  ) { }

  employeeList: IEmployees[] = [];
  search = '';
  ngOnInit(): void {

    this.getEmployee();

    this.searchEmployees();
  }

  getEmployee() {
    this.employeeSV.getEmployees().subscribe((data: IEmployees[]) => {
      this.employeeList = data;
    });
  }

  searchEmployees() {
    this._searchKeyUp$
      .pipe(debounce((ev) => ev.key !== 'Enter' ? timer(200) : EMPTY))
      .subscribe((ev) => {
        this.employeeSV.searchEmployees(this.search).subscribe((data) => {
          this.employeeList = data;
        })
      })
  }
}
