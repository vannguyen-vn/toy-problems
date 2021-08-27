const makeChange = require('./coinSums.js')


test('it should calculate number of change options', () => {
  expect(makeChange(5)).toEqual(4);
  expect(makeChange(8)).toEqual(7);
})