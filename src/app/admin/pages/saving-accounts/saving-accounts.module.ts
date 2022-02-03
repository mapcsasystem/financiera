import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavingAccountsRoutingModule } from './saving-accounts-routing.module';
import { SavingAccountsComponent } from './saving-accounts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SavingAccountsComponent
  ],
  imports: [
    CommonModule,
    SavingAccountsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class SavingAccountsModule { }
