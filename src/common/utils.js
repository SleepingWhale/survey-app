export class Validators {
  static string = value =>
    (typeof value === 'string' || value instanceof String) && value.length > 0;

  static date = value => value instanceof Date;

  static boolean = value => typeof value === 'boolean';

  static number = value => {
    let _value = value;
    if (this.string(value) && /^-?\d*[.,]?\d*$/.test(value))
      _value = parseFloat(_value);
    return typeof _value === 'number' && Number.isFinite(_value);
  };
}
