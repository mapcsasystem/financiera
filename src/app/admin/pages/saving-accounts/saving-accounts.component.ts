import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { SavingAccountsModel } from '../../models/saving-accounts';
import { SavingAccountsService } from '../../services/saving-accounts.service';

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
    'saldo'
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
      const auxRes={...resp};
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

  openDialog(): void {

    // const dialogRef = this.dialog.open(CreateCustomerComponent, {
    //   maxWidth: '100vw',
    //   maxHeight: '100vh',
    //   // height: '95%',
    //   width: '50%',
    // });

    // this.subscription.add(
    //   dialogRef.afterClosed().subscribe((result) => {
    //     if (result) {
    //       this.ngOnInit();
    //       this.ngAfterViewInit();
    //     }
    //   })
    // );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
