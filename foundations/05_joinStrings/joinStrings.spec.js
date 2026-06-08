const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Andrei', () => {
    expect(values.firstName).toEqual('Andrei');
  });
  test('lastName is Mago', () => {
    expect(values.lastName).toEqual('Mago');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 2005', () => {
    expect(values.birthYear).toEqual(2005);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Andrei Mago and I am 21 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Andrei Mago', () => {
    expect(values.fullName).toEqual('Andrei Mago');
  });
  test('age is 21', () => {
    expect(values.age).toEqual(21);
  });
});
