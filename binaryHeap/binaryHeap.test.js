const BinaryHeap = require('./binaryHeap.js');

describe.skip('binary heap', () => {
  test('items smaller than their parent should swap with the parent', () => {
    var testHeap = new BinaryHeap();
    testHeap.insert(10);
    testHeap.insert(5);
    expect(testHeap.getRoot()).toEqual(5);
    testHeap.insert(3);
    expect(testHeap.getRoot()).toEqual(3);
    testHeap.insert(7);
    expect(testHeap.getRoot()).toEqual(3);
    testHeap.insert(-1);
    expect(testHeap.getRoot()).toEqual(-1);
  })
  var testHeap = new BinaryHeap();
  testHeap.insert(10);
  testHeap.insert(5);
  testHeap.insert(3);
  testHeap.insert(7);
  testHeap.insert(-1);
  test('.remove should remove the root item', () => {
    expect(testHeap.removeRoot()).toEqual(-1);
  })
  test('the next smallest item should replace the root', () => {
    expect(testHeap.getRoot()).toEqual(3);
    expect(testHeap.removeRoot()).toEqual(3);
    expect(testHeap.removeRoot()).toEqual(5);
  })
})