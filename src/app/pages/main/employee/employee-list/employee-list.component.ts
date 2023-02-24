import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { debounce, debounceTime, EMPTY, Subscription, timer } from 'rxjs';
import { IEmployees } from 'src/app/shared/interfaces/IEmployess';
import { EmployeeService } from 'src/app/shared/services/employee-service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {

  _searchKeyUp$ = new EventEmitter<KeyboardEvent>();
  employeeList: IEmployees[] = [];
  search = '';
  // subscription
  subs: Subscription[] = [];

  constructor(
    private readonly employeeSV: EmployeeService
  ) { }


  ngOnInit(): void {

    this.getEmployee();

    this.searchEmployees();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => e.unsubscribe());
  }

  /**
   * The getEmployee() function is a function that calls the getEmployees() function from the employeeSV
   * service, which returns an observable of type IEmployees[], which is then assigned to the
   * employeeList variable.
   */
  getEmployee(): void {
    const sGetEmployessSubscription = this.employeeSV.getEmployees().subscribe((data: IEmployees[]) => {
      this.employeeList = data;
    });

    this.subs.push(sGetEmployessSubscription);
  }

  searchEmployees(): void {
    const sSearchSubscription = this._searchKeyUp$
      .pipe(debounce((ev) => ev.key !== 'Enter' ? timer(200) : EMPTY))
      .subscribe((ev) => {
        this.employeeSV.searchEmployees(this.search).subscribe((data) => {
          this.employeeList = data;
        })
      });

    this.subs.push(sSearchSubscription);
  }
}
