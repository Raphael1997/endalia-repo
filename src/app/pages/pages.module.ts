import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  /* Authentication layout */
  {
    path: 'auth',
    loadChildren: () => import('../pages/auth/auth.module').then(m => m.AuthModule),
    canLoad: [], canActivate: []
  },

  /* Main Layout */
  {
    path: '', component: MainComponent,
    loadChildren: () => import('../pages/main/main.module').then(m => m.MainModule)
  },

  /* No page found  */
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
