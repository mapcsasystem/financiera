import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomersModel } from '../models/customers.model';
import { SavingAccountsResponseModel } from '../models/saving-accounts.model';
import { CustomersModule } from '../pages/customers/customers.module';

@Injectable({
    providedIn: 'root'
})
export class SavingAccountsService {

    constructor(private http: HttpClient) { }

    getAllSavingAccounts(): Observable<SavingAccountsResponseModel> {
        const params = {
            auth: localStorage.getItem('idToken')!
        }
        return this.http.get<SavingAccountsResponseModel>(`${environment.api.savingAccounts.url}`, { params });
    }

    createSavingAccounts(form: CustomersModule) {
        const params = {
            auth: localStorage.getItem('idToken')!
        }
        return this.http.post(`${environment.api.savingAccounts.url}/${localStorage.getItem('localId')!}.json`, form, { params })
    }
}
