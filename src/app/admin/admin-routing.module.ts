import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/customers/customers.module').then((m) => m.CustomersModule), },
      { path: 'customers', loadChildren: () => import('./pages/customers/customers.module').then((m) => m.CustomersModule), }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
