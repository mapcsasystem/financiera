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
import { SavingAccountsModel } from 'src/app/admin/models/saving-accounts.model';
import { SavingAccountsService } from 'src/app/admin/services/saving-accounts.service';
import { TransactionsGettersFields } from 'src/app/shared/getters/transaction-getters';
import { RegExpValidation } from 'src/app/shared/regex/regex';

@Component({
  selector: 'app-transaction-deposit',
  templateUrl: './transaction-deposit.component.html',
  styleUrls: ['./transaction-deposit.component.scss'],
})
export class TransactionDepositComponent implements OnInit, OnDestroy {
  formData!: FormGroup;
  validateField!: TransactionsGettersFields;
  startDate!: Date;
  private subscription = new Subscription();

  constructor(
    private dialogRef: MatDialogRef<TransactionDepositComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SavingAccountsModel,
    private fb: FormBuilder,
    private savingAccountsService: SavingAccountsService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    console.log(this.data);
  }

  initForm() {
    this.dialogRef.disableClose = true;
    this.formData = this.fb.group({
      fechaUltimaAct: [null, [Validators.required]],
      monto: [
        null,
        [
          Validators.required,
          Validators.pattern(RegExpValidation.onlyNumbersFloats),
        ],
      ],
      numeroCuenta: [null, [Validators.required]],
      terminal: [null, [Validators.required]],
      tipo: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
    });
    this.validateField = new TransactionsGettersFields(this.formData);
    this.validateField.numeroCuenta?.setValue(this.data.numeroCuenta);
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
      .createTransactions(this.formData.value)
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

  private scrollToFirstInvalidControl(): void {
    if (this.validateField.usuario?.errors) {
      document.getElementById('usuarioId')?.scrollIntoView();
      return;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
