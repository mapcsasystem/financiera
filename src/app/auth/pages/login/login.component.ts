import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginGettersFields } from 'src/app/shared/getters/login-getters';
import { RegExpValidation } from 'src/app/shared/regex/regex';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin!: FormGroup;
  validateField!: LoginGettersFields;
  visibilityEye = false;
  private _subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initFormLogin();
  }

  initFormLogin() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(RegExpValidation.email)]],
      password: ['', [Validators.required]],
    })
    this.validateField = new LoginGettersFields(this.formLogin);
  }

  login() {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    }
    this.loginService.login(this.formLogin.value)
      .subscribe(resp => {
        if (resp) {
          this.router.navigate(['/admin']);
        } else {
          this.snackBar.open('Error no tienes permisos', 'OK', {
            duration: 5000,
          });
        }
      })
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
