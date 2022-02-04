import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavingAccountsComponent } from './saving-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: SavingAccountsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavingAccountsRoutingModule {}
