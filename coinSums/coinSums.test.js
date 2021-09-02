const makeChange = require('./coinSums.js')


test.skip('it should calculate number of change options', () => {
  expect(makeChange(5)).toEqual(4);}),
  test.skip('it should calculate number of change options', () => {
  expect(makeChange(8)).toEqual(7);}),
  test.skip('it should calculate number of change options', () => {
  expect(makeChange(12)).toEqual(15);}),
  test.skip('it should calculate number of change options', () => {
  expect(makeChange(15)).toEqual(22);
})