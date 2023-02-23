import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employees-list', pathMatch: 'full' },
  { path: 'employees-list', loadChildren: () => import('./employee-list/employee-list.module').then(m => m.EmployeeListModule) },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
