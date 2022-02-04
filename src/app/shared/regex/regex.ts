/* eslint-disable max-len */
export class RegExpValidation {
  static email =/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  static onlyNumbersFloats = /^[0-9]{1,10}$|^[0-9]{1,10}\.[0-9]{1,2}$/;
}
