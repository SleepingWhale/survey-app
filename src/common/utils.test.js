import { Validators } from './utils';

describe('Validators', () => {
  it('should validate numbers', () => {
    expect(Validators.number(1)).toBeTruthy();
    expect(Validators.number('1')).toBeTruthy();
    expect(Validators.number('1.2')).toBeTruthy();
    expect(Validators.number('1,2')).toBeTruthy();
    expect(Validators.number('text')).toBeFalsy();
    expect(Validators.number(NaN)).toBeFalsy();
    expect(Validators.number({})).toBeFalsy();
    expect(Validators.number(',')).toBeFalsy();
    expect(Validators.number(true)).toBeFalsy();
  });

  it('should validate strings', () => {
    expect(Validators.number('hello')).toBeTruthy();
    expect(Validators.number(1)).toBeFalsy();
    expect(Validators.number('')).toBeFalsy();
    expect(Validators.number(NaN)).toBeFalsy();
    expect(Validators.number({})).toBeFalsy();
    expect(Validators.number(',')).toBeFalsy();
    expect(Validators.number(true)).toBeFalsy();
  });

  it('should validate dates', () => {
    expect(Validators.date(new Date())).toBeTruthy();
    expect(Validators.date(1)).toBeFalsy();
    expect(Validators.date('')).toBeFalsy();
    expect(Validators.date(NaN)).toBeFalsy();
    expect(Validators.date({})).toBeFalsy();
    expect(Validators.date(',')).toBeFalsy();
    expect(Validators.date(true)).toBeFalsy();
  });
});
