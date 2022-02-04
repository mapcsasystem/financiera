// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
