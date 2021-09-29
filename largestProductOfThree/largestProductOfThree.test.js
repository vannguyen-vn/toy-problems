const { largestProductOfThree } = require('./largestProductOfThree.js');

it('finds largest product in array of all pos integers', () => {
  const product = largestProductOfThree([2, 1, 3, 7]);
  expect(product).toBe(42);
});

it('finds largest product in array of all negative integers', () => {
  const product = largestProductOfThree([-2, -1, -3, -7]);
  expect(product).toBe(-6);
});

it('finds largest product in array of some negative, some positive integers', () => {
  const product = largestProductOfThree([-2, 1, -3, 7]);
  expect(product).toBe(42);
});