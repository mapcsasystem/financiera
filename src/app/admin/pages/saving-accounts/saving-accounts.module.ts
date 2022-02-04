import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavingAccountsRoutingModule } from './saving-accounts-routing.module';
import { SavingAccountsComponent } from './saving-accounts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateSavingAccountsComponent } from './dialogs/create-saving-accounts/create-saving-accounts.component';
import { TransactionDepositComponent } from './dialogs/transaction-deposit/transaction-deposit.component';
import { TransactionRetirementComponent } from './dialogs/transaction-retirement/transaction-retirement.component';
import { TransactionHistoryComponent } from './dialogs/transaction-history/transaction-history.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SavingAccountsComponent,
    CreateSavingAccountsComponent,
    TransactionDepositComponent,
    TransactionRetirementComponent,
    TransactionHistoryComponent,
  ],
  imports: [
    CommonModule,
    SavingAccountsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    PipesModule,
    ComponentsModule,
  ],
})
export class SavingAccountsModule {}
