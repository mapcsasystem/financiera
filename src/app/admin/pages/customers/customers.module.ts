import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateCustomerComponent } from './dialogs/create-customer/create-customer.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CreateCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ]
})
export class CustomersModule { }
