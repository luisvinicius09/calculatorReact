import calculate from '../logic/calculate.js';

describe('calculations', () => {
  it('returns the result of a sum', () => {
    const results = calculate({ total: '2', next: '2', operation: '+' }, '=');
    const expected = { total: "4", next: null, operation: null };
    expect(results).toMatchObject(expected);
  });

  it('returns the result of a subtraction', () => {
    const results = calculate({ total: '4', next: '2', operation: '-' }, '=');
    const expected = { total: '2', next: null, operation: null };
    expect(results).toMatchObject(expected);
  });

  it('returns the result of a division', () => {
    const results = calculate({ total: '10', next: '2', operation: '÷' }, '=');
    const expected = { total: '5', next: null, operation: null };
    expect(results).toMatchObject(expected);
  });

  it('returns the result of a multiplication', () => {
    const results = calculate({ total: '10', next: '2', operation: 'x' }, '=');
    const expected = { total: '20', next: null, operation: null };
    expect(results).toMatchObject(expected);
  });

  it('returns the operation if equals null', () => {
    const results = calculate({ total: '2', next: null, operation: null }, '+');
    const expected = { total: "2", next: null, operation: '+' };
    expect(results).toMatchObject(expected);
  });

  it('returns the total value in percentage if operation is null', () => {
    const results = calculate({ total: '10', next: null, operation: null }, '%');
    const expected = { total: '0.1', next: null, operation: null };
    expect(results).toMatchObject(expected);
  });

  it('returns the percentage of the total value as the next value if there is operation', () => {
    const results = calculate({ total: '10', next: null, operation: '+' }, '%');
    const expected = { total: '10', next: '0.1', operation: '+' };
    expect(results).toMatchObject(expected);
  });

  it('returns the percentage of the next value', () => {
    const results = calculate({ total: '10', next: '5', operation: 'x' }, '%');
    const expected = { total: '10', next: '0.05', operation: 'x' };
    expect(results).toMatchObject(expected);
  });
});

describe('tests on buttons logic', () => {
  it('A/C logic clears the values', () => {
    const values = calculate({ total: '10', next: '42', operation: '+' }, 'A/C');
    const expected = { total: null, next: null, operation: null };
    expect(values).toMatchObject(expected);
  });

  it('+/- logic returns the positive of the current number', () => {
    const values = calculate({ total: '-10', next: null, operation: null }, '+/-');
    const expected = { total: '10', next: null, operation: null };
    expect(values).toMatchObject(expected);
  });

  it('+/- logic returns the negative of the current number', () => {
    const values = calculate({ total: '10', next: '42', operation: '+' }, '+/-');
    const expected = { total: '10', next: '-42', operation: '+' };
    expect(values).toMatchObject(expected);
  });

  it ('= logic returns the total from a calculation', () => {
    const values = calculate({ total: '10', next: '42', operation: '+' }, '=');
    const expected = { total: '52', next: null, operation: null };
    expect(values).toMatchObject(expected);
  });

  it ('. logic returns a dot after the number if it is not zero', () => {
    const values = calculate({ total: '10', next: null, operation: null }, '.');
    const expected = { total: '10.', next: null, operation: null };
    expect(values).toMatchObject(expected);
  });

  it ('. logic returns a zero with a dot', () => {
    const values = calculate({ total: null, next: null, operation: null }, '.');
    const expected = { total: '0.', next: null, operation: null };
    expect(values).toMatchObject(expected);
  });
});

describe('numbers buttons', () => {
  it('sends a number to total or next as a value', () => {
    const number = calculate({ total: null, next: null, operation: null }, '1');
    const expected = { total: '1', next: null, operation: null };
    expect(number).toMatchObject(expected);
  });

  it('sends a number to total or next as a value', () => {
    const number = calculate({ total: '10', next: null, operation: '-' }, '9');
    const expected = { total: '10', next: '9', operation: '-' };
    expect(number).toMatchObject(expected);
  });
});

it('returns an empty object if the button is invalid', () => {
  const number = calculate({ total: null, next: null, operation: null }, 'g');
  const expected = {};
  expect(number).toMatchObject(expected);
})