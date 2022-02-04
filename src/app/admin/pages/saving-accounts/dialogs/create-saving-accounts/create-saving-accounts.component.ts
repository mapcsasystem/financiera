import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorExpiredComponent } from 'src/app/admin/components/error-expired/error-expired.component';
import { SavingAccountsService } from 'src/app/admin/services/saving-accounts.service';
import { SavingAccountsGettersFields } from 'src/app/shared/getters/saving-accounts-getters';
import { RegExpValidation } from 'src/app/shared/regex/regex';

@Component({
  selector: 'app-create-saving-accounts',
  templateUrl: './create-saving-accounts.component.html',
  styleUrls: ['./create-saving-accounts.component.scss'],
})
export class CreateSavingAccountsComponent implements OnInit, OnDestroy {
  formData!: FormGroup;
  validateField!: SavingAccountsGettersFields;
  startDate!: Date;
  private subscription = new Subscription();

  constructor(
    private dialogRef: MatDialogRef<CreateSavingAccountsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private savingAccountsService: SavingAccountsService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.dialogRef.disableClose = true;
    this.formData = this.fb.group({
      estado: ['Activa'],
      fechaUltimaAct: [null, [Validators.required]],
      idCliente: [null, [Validators.required]],
      numeroCuenta: [null, [Validators.required]],
      saldo: [null, [Validators.required,  Validators.pattern(RegExpValidation.onlyNumbersFloats)]],
    });
    this.validateField = new SavingAccountsGettersFields(this.formData);
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  save() {
    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
    this.savingAccountsService
      .createSavingAccounts(this.formData.value)
      .subscribe(
        (resp) => {
          this.dialogRef.close(true);
        },
        ({ error }) => {
          if ('Auth token is expired' === error.error) {
            this.dialogRef.close(true);
            const dialogRef = this.dialog.open(ErrorExpiredComponent, {
              maxWidth: '100vw',
              maxHeight: '100vh',
              // height: '95%',
              width: '80%',
            });

            this.subscription.add(
              dialogRef.afterClosed().subscribe((result) => {
                this.router.navigate(['/login']);
              })
            );
          }
        }
      );
  }

  addEventDatePicker(
    event: MatDatepickerInputEvent<Date> | any,
    valueDate: string
  ): void {
    this.startDate = new Date();
    switch (valueDate) {
      case 'fechaUltimaAct':
        event.value.setHours(
          this.startDate.getHours(),
          this.startDate.getMinutes(),
          this.startDate.getSeconds(),
          this.startDate.getMilliseconds()
        );
        this.validateField.fechaUltimaAct?.setValue(event.value);
        break;
    }
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe()
  }
}
