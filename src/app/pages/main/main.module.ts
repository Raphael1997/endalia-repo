import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  {
    path: 'employees',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    canLoad: [AuthGuard]
  },

  /* Page not found */
  { path: '**', redirectTo: 'employees' }
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
