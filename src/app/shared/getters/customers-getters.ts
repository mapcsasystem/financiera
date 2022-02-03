import { AbstractControl, FormGroup } from '@angular/forms';

export class GettersCustomersFields {
  private form: FormGroup;

  constructor(form: FormGroup) {
    this.form = form;
  }

  get fullName(): AbstractControl | null {
    return this.form.get('fullName');
  }

  get address(): AbstractControl | null {
    return this.form.get('address');
  }

  get age(): AbstractControl | null {
    return this.form.get('age');
  }

  get gender(): AbstractControl | null {
    return this.form.get('gender');
  }
}