import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomersModel } from '../models/customers.model';
import { CustomersModule } from '../pages/customers/customers.module';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<CustomersModel[]> {
    return this.http.get<CustomersModel[]>(`${environment.api.customers}`);
  }

  createCustomer(form: CustomersModule) {
    return this.http.post(`${environment.api.customers}`, form);
  }
}
