import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginPostBodyModel, LoginResponseSuccessModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
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
    return this.http.post<LoginResponseSuccessModel>(`${environment.api.login.url}`, body, { params })
      .pipe(
        tap(resp => {
          const HOUR = 1000 * 60 * 60;
          localStorage.setItem('idToken', resp.idToken);
          localStorage.setItem('localId', resp.localId);
          localStorage.setItem('endDate', (Date.now() + HOUR).toString());
        }),
        map(resp => true),
        catchError(err => of(false))
      )
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  verifyToken() {
    const idToken = localStorage.getItem('idToken');
    const localId = localStorage.getItem('localId');
    const endDate = localStorage.getItem('endDate');
    if (idToken === null || localId === null || endDate === null) {
      localStorage.clear();
      this.router.navigate(['/login']);
      return false;
    }
    if (new Date() > new Date(parseInt(endDate))) {
      localStorage.clear();
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
