import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  /* Authentication layout */
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },

  /* Main Layout */
  {
    path: '', component: MainComponent,
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },

  /* No page found */
  /*  { path: '**', redirectTo: '' } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
