var deepEquality = require('./deepEquality.js');

test.skip('it should return true if 2 objects are deeply equal', () => {
  expect(deepEquality({a:1, b: {c:3}},{a:1, b: {c:3}})).toEqual(true);
})
test.skip('it should return false if 2 objects are not deeply equal', () => {
  expect(deepEquality({a:1, b: {c:5}},{a:1, b: {c:6}})).toEqual(false);
})