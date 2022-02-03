import { AbstractControl, FormGroup } from '@angular/forms';

export class SavingAccountsGettersFields {
    private form: FormGroup;

    constructor(form: FormGroup) {
        this.form = form;
    }

    get estado(): AbstractControl | null {
        return this.form.get('estado');
    }

    get fechaUltimaAct(): AbstractControl | null {
        return this.form.get('fechaUltimaAct');
    }

    get idCliente(): AbstractControl | null {
        return this.form.get('idCliente');
    }

    get numeroCuenta(): AbstractControl | null {
        return this.form.get('numeroCuenta');
    }

    get saldo(): AbstractControl | null {
        return this.form.get('saldo');
    }

}
