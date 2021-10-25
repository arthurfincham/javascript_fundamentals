const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
  it('3 = Fizz', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('9 = Fizz', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  it('5 = Buzz', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('10 = Buzz', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  it('15 = FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('30 = FizzBuzz', () => {
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  it('4 = 4', () => {
    expect(fizzBuzz(4)).toBe(4);
  });

  it('11 = 11', () => {
    expect(fizzBuzz(11)).toBe(11);
  });
});