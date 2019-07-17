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
    expect(Validators.string(null)).toBeFalsy();
    expect(Validators.number(true)).toBeFalsy();
  });

  it('should validate strings', () => {
    expect(Validators.string('hello')).toBeTruthy();
    expect(Validators.string(1)).toBeFalsy();
    expect(Validators.string('')).toBeFalsy();
    expect(Validators.string(NaN)).toBeFalsy();
    expect(Validators.string({})).toBeFalsy();
    expect(Validators.string(null)).toBeFalsy();
    expect(Validators.string(true)).toBeFalsy();
  });

  it('should validate dates', () => {
    expect(Validators.date(new Date())).toBeTruthy();
    expect(Validators.date(1)).toBeFalsy();
    expect(Validators.date('')).toBeFalsy();
    expect(Validators.date(NaN)).toBeFalsy();
    expect(Validators.date({})).toBeFalsy();
    expect(Validators.date(',')).toBeFalsy();
    expect(Validators.string(null)).toBeFalsy();
    expect(Validators.date(true)).toBeFalsy();
  });

  it('should validate booleans', () => {
    expect(Validators.boolean(true)).toBeTruthy();
    expect(Validators.boolean(false)).toBeTruthy();
    expect(Validators.boolean(1)).toBeFalsy();
    expect(Validators.boolean('')).toBeFalsy();
    expect(Validators.boolean(NaN)).toBeFalsy();
    expect(Validators.boolean({})).toBeFalsy();
    expect(Validators.string(null)).toBeFalsy();
    expect(Validators.boolean('true')).toBeFalsy();
  });
});
