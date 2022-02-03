import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { SavingAccountsModel } from '../../models/saving-accounts.model';
import { SavingAccountsService } from '../../services/saving-accounts.service';
import { CreateSavingAccountsComponent } from './dialogs/create-saving-accounts/create-saving-accounts.component';
import { TransactionDepositComponent } from './dialogs/transaction-deposit/transaction-deposit.component';
import { TransactionHistoryComponent } from './dialogs/transaction-history/transaction-history.component';
import { TransactionRetirementComponent } from './dialogs/transaction-retirement/transaction-retirement.component';

@Component({
  selector: 'app-saving-accounts',
  templateUrl: './saving-accounts.component.html',
  styleUrls: ['./saving-accounts.component.scss']
})
export class SavingAccountsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  savingAccountsDisplayedColumns: string[] = [
    'idCliente',
    'estado',
    'fechaUltimaAct',
    'numeroCuenta',
    'saldo',
    'transacciones'
  ];

  savingAccountsDataSource = new MatTableDataSource<SavingAccountsModel>();
  savingAccounts: SavingAccountsModel[] = [];
  private subscription = new Subscription();
  constructor(
    private dialog: MatDialog,
    private savingAccountsService: SavingAccountsService
  ) { }
  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.savingAccountsService.getAllSavingAccounts().subscribe((resp) => {
      const auxRes = { ...resp };
      if (resp) {
        for (let iterator of Object.keys(auxRes)) {
          auxRes[iterator].id = iterator;
          this.savingAccounts.push(auxRes[iterator]);
        }
        this.savingAccountsDataSource.data = [...this.savingAccounts];
        this.savingAccounts = [...this.savingAccounts]
      } else {
        this.savingAccountsDataSource.data = [];
        this.savingAccounts = [];
      }
      this.savingAccountsDataSource.sort = this.sort;
    })
  }

  async ngAfterViewInit() {
    this.savingAccountsDataSource.paginator = this.paginator;
    this.savingAccountsDataSource.paginator._intl.itemsPerPageLabel =
      'Cuentas de Ahorro por página';
    this.savingAccountsDataSource.paginator._intl.firstPageLabel = 'Primera Página';
    this.savingAccountsDataSource.paginator._intl.previousPageLabel =
      'Página anterior';
    this.savingAccountsDataSource.paginator._intl.nextPageLabel = 'Siguente página';
    this.savingAccountsDataSource.paginator._intl.lastPageLabel = 'Última Página';
    this.savingAccountsDataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.savingAccountsDataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(CreateSavingAccountsComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      // height: '95%',
      width: '50%',
    });

    this.subscription.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.ngOnInit();
          this.ngAfterViewInit();
        }
      })
    );
  }

  openDialogGeneric(dialogOpen: string, savingAccounts: SavingAccountsModel): void {
    let dialogRef;
    switch (dialogOpen) {
      case 'deposit':
        dialogRef = this.dialog.open(TransactionDepositComponent, {
          maxWidth: '100vw',
          maxHeight: '100vh',
          // height: '95%',
          width: '95%',
          data: savingAccounts,
        });
        this.subscription.add(
          dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
          })
        );
        break;
      case 'retirement':
        dialogRef = this.dialog.open(TransactionRetirementComponent, {
          maxWidth: '100vw',
          maxHeight: '100vh',
          // height: '95%',
          width: '95%',
          data: savingAccounts,
        });
        this.subscription.add(
          dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
          })
        );
        break;
        case 'history':
        dialogRef = this.dialog.open(TransactionHistoryComponent, {
          maxWidth: '100vw',
          maxHeight: '100vh',
          // height: '95%',
          width: '95%',
          data: savingAccounts,
        });
        this.subscription.add(
          dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
          })
        );
        break;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
