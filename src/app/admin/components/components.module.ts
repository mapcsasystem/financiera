import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ErrorExpiredComponent } from './error-expired/error-expired.component';



@NgModule({
  declarations: [
    ErrorExpiredComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ErrorExpiredComponent
  ]

})
export class ComponentsModule { }
