import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-saving-accounts',
  templateUrl: './create-saving-accounts.component.html',
  styleUrls: ['./create-saving-accounts.component.scss']
})
export class CreateSavingAccountsComponent implements OnInit {
  formData!: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<CreateSavingAccountsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    // private customersService: CustomersService
  ) { }

  ngOnInit(): void {
  }

  initForm() {
    this.dialogRef.disableClose = true;
    this.formData = this.fb.group({
      estado: ['Activa'],
      fechaUltimaAct: [null, [Validators.required]],
      idCliente: [null, [Validators.required]],
      numeroCuenta: [null, [Validators.required]],
      saldo: [null, [Validators.required]],
    })
    // this.validateField = new GettersCustomersFields(this.formData);
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  save() {
    // if (this.formData.invalid) {
    //   this.formData.markAllAsTouched();
    //   return;
    // }
    // this.customersService.createCustomer(this.formData.value)
    //   .subscribe(resp => {
    //     this.dialogRef.close(true);
    //   })
  }

}
