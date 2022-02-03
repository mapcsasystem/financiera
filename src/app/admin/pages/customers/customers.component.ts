import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CustomersModel } from '../../models/customers.model';
import { CreateCustomerComponent } from './dialogs/create-customer/create-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  customersDisplayedColumns: string[] = [
    'id',
    // 'fechaDefuncion',
    // 'horaDefuncion',
    // 'nombreDifunto',
    // 'domicilioDelServicio',
    // 'responsableDelDifunto',
    // 'domicilioDelResponsable',
    // 'precio',
    // 'fechaDelContrato',
    // 'fechaDeProrroga',
    // 'abono',
    // 'observaciones',
    // 'actions'
  ];

  customersDataSource = new MatTableDataSource<CustomersModel>();
  customers: CustomersModel[] = [];
  private subscription = new Subscription();
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.customersDataSource.data = [];
    this.customersDataSource.sort = this.sort;
    this.customers = [];
  }

  async ngAfterViewInit() {
    this.customersDataSource.paginator = this.paginator;
    this.customersDataSource.paginator._intl.itemsPerPageLabel =
      'Clientes por página';
    this.customersDataSource.paginator._intl.firstPageLabel = 'Primera Página';
    this.customersDataSource.paginator._intl.previousPageLabel =
      'Página anterior';
    this.customersDataSource.paginator._intl.nextPageLabel = 'Siguente página';
    this.customersDataSource.paginator._intl.lastPageLabel = 'Última Página';
    this.customersDataSource.sort = this.sort;
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      // height: '95%',
      width: '50%',
    });
    this.subscription.add(
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      })
    );
  }

}