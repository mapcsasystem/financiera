import { AbstractControl, FormGroup } from '@angular/forms';

export class TransactionsGettersFields {
  private form: FormGroup;

  constructor(form: FormGroup) {
    this.form = form;
  }

  get fechaUltimaAct(): AbstractControl | null {
    return this.form.get('fechaUltimaAct');
  }
  get monto(): AbstractControl | null {
    return this.form.get('monto');
  }
  get numeroCuenta(): AbstractControl | null {
    return this.form.get('numeroCuenta');
  }
  get terminal(): AbstractControl | null {
    return this.form.get('terminal');
  }
  get tipo(): AbstractControl | null {
    return this.form.get('tipo');
  }
  get usuario(): AbstractControl | null {
    return this.form.get('usuario');
  }
}
