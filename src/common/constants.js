export const types = {
  string: 'string',
  number: 'number',
  boolean: 'boolean',
  date: 'date',
  email: 'email'
};

export const validationMessages = {
  [types.string]: 'This field can not be empty',
  [types.number]: 'Enter a number greater then 0',
  [types.boolean]: 'Select something',
  [types.date]: 'Pick a date',
  [types.email]: 'Please, provide a valid email address'
};
