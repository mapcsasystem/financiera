export const environment = {
  production: true,
  api: {
    login: {
      url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword',
      key: 'AIzaSyB-p8CKoaQr097NJ8YJRpoWpezJj5xRRUI'
    },
    savingAccounts: {
      url: 'https://mibanco-333616-default-rtdb.firebaseio.com/cuentaAhorro',
    },
    customers: 'https://us-central1-servicios-funerarios-sama.cloudfunctions.net/customers',
  }
};
