export const environment = {
  production: true,
  api: {
    login: {
      url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword',
      key: 'AIzaSyB-p8CKoaQr097NJ8YJRpoWpezJj5xRRUI',
    },
    savingAccounts: {
      url: 'https://mibanco-333616-default-rtdb.firebaseio.com/cuentaAhorro',
    },
    transactions: {
      url: 'https://mibanco-333616-default-rtdb.firebaseio.com/transacciones',
    },
    customers: 'https://us-central1-prueba-9c927.cloudfunctions.net/customers',
  },
};
