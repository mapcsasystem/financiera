import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomersService } from 'src/app/admin/services/customers.service';
import { GettersCustomersFields } from 'src/app/shared/getters/customers-getters';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnInit {
  formData!: FormGroup;
  validateField!: GettersCustomersFields;
  constructor(
    private dialogRef: MatDialogRef<CreateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.dialogRef.disableClose = true;
    this.formData = this.fb.group({
      id: [null],
      fullName: [null, [Validators.required]],
      address: [null, [Validators.required]],
      age: [null, [Validators.required]],
      gender: [null, [Validators.required]],
    });
    this.validateField = new GettersCustomersFields(this.formData);
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  save() {
    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
    this.customersService
      .createCustomer(this.formData.value)
      .subscribe((resp) => {
        this.dialogRef.close(true);
      });
  }
}
