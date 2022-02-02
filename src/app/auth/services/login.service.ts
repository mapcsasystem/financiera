import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginPostBodyModel, LoginResponseSuccessModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(form: LoginPostBodyModel): Observable<boolean> {
    const params = {
      key: environment.api.login.key
    }
    const body: LoginPostBodyModel = {
      email: form.email,
      password: form.password,
      returnSecureToken: true
    }
    return this.http.post<LoginResponseSuccessModel>(`${environment.api.login.url}`,  body , { params })
    .pipe(
      tap(resp=>{
        console.log(resp);
      }),
      map(resp=>true),
      catchError(err=>of(false))
    )
  }
}
