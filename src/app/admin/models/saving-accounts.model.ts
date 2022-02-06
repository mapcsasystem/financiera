export interface SavingAccountsModel {
  id?: string;
  estado: string;
  fechaUltimaAct: Date | any;
  idCliente: number;
  numeroCuenta: string;
  saldo: number;
}

export interface SavingAccountsResponseModel {
  [key: string]: SavingAccountsModel;
}

export interface TransacionModel {
  id?: string;
  fechaUltimaAct: Date;
  monto: number;
  numeroCuenta: string;
  terminal: string;
  tipo: string;
  usuario: string;
}

export interface TransactionsResponseModel {
  [key: string]: TransacionModel;
}
