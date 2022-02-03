export interface SavingAccountsModel {
    id?: string;
    estado: string;
    fechaUltimaAct: Date | any
    idCliente: number;
    numeroCuenta: string;
    saldo: number;
}

export interface SavingAccountsResponseModel {
    [key: string]: {
        id?: string;
        estado: string;
        fechaUltimaAct: Date | any
        idCliente: number;
        numeroCuenta: string;
        saldo: number;
    }
}