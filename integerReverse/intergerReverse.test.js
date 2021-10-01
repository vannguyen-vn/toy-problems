const reverseInteger = require('./integerReverse.js');

test('intergerReverse reverses an input number', ()=> {
  expect(reverseInteger(345)).toBe(543);
  expect(reverseInteger(-321)).toBe(-123);
  expect(reverseInteger(9)).toBe(9);
})