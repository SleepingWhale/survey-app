import { types } from './constants';

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
}
