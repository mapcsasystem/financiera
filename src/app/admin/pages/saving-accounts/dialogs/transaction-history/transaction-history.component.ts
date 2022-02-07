import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ErrorExpiredComponent } from 'src/app/admin/components/error-expired/error-expired.component';
import { TransacionModel } from 'src/app/admin/models/saving-accounts.model';
import { SavingAccountsService } from 'src/app/admin/services/saving-accounts.service';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
})
export class TransactionHistoryComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  transactionsDisplayedColumns: string[] = [
    'fechaUltimaAct',
    'monto',
    'numeroCuenta',
    'terminal',
    'tipo',
    'usuario',
  ];

  transactionsDataSource = new MatTableDataSource<TransacionModel>();
  transactions: TransacionModel[] = [];

  private subscription = new Subscription();

  constructor(
    private dialogRef: MatDialogRef<TransactionHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private savingAccountsService: SavingAccountsService,
    private dialog: MatDialog,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.dialogRef.disableClose = true;
    this.getAllSavingAccounts();
  }

  getAllSavingAccounts() {
    this.transactionsDataSource.data = [];
    this.transactions = [];
    this.savingAccountsService.getAllTransacions().subscribe(
      (resp) => {
        const auxRes = { ...resp };
        if (resp) {
          for (let iterator of Object.keys(auxRes)) {
            auxRes[iterator].id = iterator;
            this.transactions.push(auxRes[iterator]);
          }
          this.transactionsDataSource.data = [...this.transactions];
          this.transactions = [...this.transactions];
        }
        this.transactionsDataSource.sort = this.sort;
      },
      ({ error }) => {
        const dialogRef = this.dialog.open(ErrorExpiredComponent, {
          maxWidth: '100vw',
          maxHeight: '100vh',
          // height: '95%',
          width: '80%',
        });

        this.subscription.add(
          dialogRef.afterClosed().subscribe((result) => {
            this.loginService.logout();
          })
        );
      }
    );

    //   this.savingAccountsService.getAllTransacions().subscribe(
    //     {
    //       next: (resp) => {
    //         const auxRes = { ...resp };
    //         if (resp) {
    //           for (let iterator of Object.keys(auxRes)) {
    //             auxRes[iterator].id = iterator;
    //             this.transactions.push(auxRes[iterator]);
    //           }
    //           this.transactionsDataSource.data = [...this.transactions];
    //           this.transactions = [...this.transactions];
    //         }
    //         this.transactionsDataSource.sort = this.sort;
    //         console.log(this.transactions);
    //       },
    //       error: (e) => {
    //         const dialogRef = this.dialog.open(ErrorExpiredComponent, {
    //           maxWidth: '100vw',
    //           maxHeight: '100vh',
    //           // height: '95%',
    //           width: '80%',
    //         });

    //         this.subscription.add(
    //           dialogRef.afterClosed().subscribe((result) => {
    //             this.loginService.logout();
    //           })
    //         );
    //       },
    //       complete: () => console.info('complete')
    //   }
    // );
  }

  async ngAfterViewInit() {
    this.transactionsDataSource.paginator = this.paginator;
    this.transactionsDataSource.paginator._intl.itemsPerPageLabel =
      'Transacciones por página';
    this.transactionsDataSource.paginator._intl.firstPageLabel =
      'Primera Página';
    this.transactionsDataSource.paginator._intl.previousPageLabel =
      'Página anterior';
    this.transactionsDataSource.paginator._intl.nextPageLabel =
      'Siguente página';
    this.transactionsDataSource.paginator._intl.lastPageLabel = 'Última Página';
    this.transactionsDataSource.sort = this.sort;
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.transactionsDataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
