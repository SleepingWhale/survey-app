import { types } from './constants';

const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export class Validators {
  static [types.string] = value =>
    (typeof value === 'string' || value instanceof String) && value.length > 0;

  static [types.date] = value => value instanceof Date;

  static [types.boolean] = value => typeof value === 'boolean';

  static [types.number] = value => {
    let _value = value;
    if (this.string(value) && /^-?\d*[.,]?\d*$/.test(value))
      _value = parseFloat(_value);
    return typeof _value === 'number' && Number.isFinite(_value) && _value > 0;
  };

  static [types.email] = value => {
    return reEmail.test(String(value).toLowerCase());
  };
}
