var binarySearch = require('./binarySearchArray.js');


test.skip('its should find the indesx of an item', ()=> {
  expect(binarySearch([1, 2, 3, 4, 5], 1)).toEqual(0);
})
test.skip('it should return null if item is not in array', ()=> {
  expect(binarySearch([1, 2, 3, 4, 5], 8)).toEqual(null);
})