import { AbstractControl, FormGroup } from '@angular/forms';

export class LoginGettersFields {
  private form: FormGroup;

  constructor(form: FormGroup) {
    this.form = form;
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }
}
