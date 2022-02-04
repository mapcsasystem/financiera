import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin/guards/admin.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard],
    canLoad: [AdminGuard]
  },
  {
    path: '**',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
