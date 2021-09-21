const fn = require('./rockPaperScissors.js');

test('test output', () => {
  expect(fn().length).toEqual(27);
});