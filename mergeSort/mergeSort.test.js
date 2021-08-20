const mergeSort = require('./mergeSort');

test('it should sort the array', () => {
  expect(mergeSort([1, 5, 7, 4, 7, 9, 0, 11, 10, -4])).toEqual([-4, 0, 1, 4, 5, 7, 7, 9, 10, 11]);
});