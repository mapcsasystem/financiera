import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SavingAccountsResponseModel } from '../models/saving-accounts.model';
import { CustomersModule } from '../pages/customers/customers.module';

@Injectable({
  providedIn: 'root',
})
export class SavingAccountsService {
  private idUser = localStorage.getItem('localId')!;
  
  constructor(private http: HttpClient) {}
  
  getAllSavingAccounts() {
    const params = {
      auth: localStorage.getItem('idToken')!,
    };
    return this.http.get<SavingAccountsResponseModel>(
      `${environment.api.savingAccounts.url}`,{params});
  }

  createSavingAccounts(form: CustomersModule) {
    const params = {
      auth: localStorage.getItem('idToken')!,
    };
    return this.http.post(
      `${environment.api.savingAccounts.url}/${this.idUser}.json`,
      form,
      { params }
    );
  }
}
