import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomersModel } from '../models/customers.model';
import { SavingAccountsResponseModel, TransacionModel, TransactionsResponseModel } from '../models/saving-accounts.model';
import { CustomersModule } from '../pages/customers/customers.module';

@Injectable({
  providedIn: 'root',
})
export class SavingAccountsService {
  private params = {
    auth: localStorage.getItem('idToken')!,
  };
  private idUser = localStorage.getItem('localId')!;
  constructor(private http: HttpClient) {}

  getAllSavingAccounts() {
    return this.http.get<SavingAccountsResponseModel>(
      `${environment.api.savingAccounts.url}/${this.idUser}.json`,
      { params: this.params }
    );
  }

  createSavingAccounts(form: CustomersModel) {
    return this.http.post(
      `${environment.api.savingAccounts.url}/${this.idUser}.json`,
      form,
      { params: this.params }
    );
  }

  getAllTransacions() {
    return this.http.get<TransactionsResponseModel>(
      `${environment.api.transactions.url}/${this.idUser}.json`,
      { params: this.params }
    );
  }

  createTransactions(form: TransacionModel) {
    return this.http.post(
      `${environment.api.transactions.url}/${this.idUser}.json`,
      form,
      { params: this.params }
    );
  }
}
