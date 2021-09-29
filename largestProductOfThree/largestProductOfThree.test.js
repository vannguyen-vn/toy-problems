const largestProductOfThree = require('./largestProductOfThree.js');

describe('largest product of three', () => {
  test('it should find the largest product', () => {
    expect(largestProductOfThree([2, 1, 3, 7])).toEqual(42);
  })
  test('it can handle negative numbers', () => {
    expect(largestProductOfThree([-2, 1, -3, 7])).toEqual(42);
  })
})