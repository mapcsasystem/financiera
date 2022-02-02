import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginGettersFields } from 'src/app/shared/getters/login-getters';
import { RegExpValidation } from 'src/app/shared/regex/regex';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin!: FormGroup;
  validateField!: LoginGettersFields;
  visibilityEye = false;
  private subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.initFormLogin();
  }

  initFormLogin() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(RegExpValidation.email)]],
      password: ['', [Validators.required]],
      returnSecureToken: [true]
    })
    this.validateField = new LoginGettersFields(this.formLogin);
  }

  login() {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
