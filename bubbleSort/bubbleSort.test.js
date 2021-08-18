const bubbleSort = require('./bubbleSort.js');

describe('bubbleSort', () => {
  it ('should be a function', () => {
    expect(typeof bubbleSort).toBe('function');
  });

  it ('should return a sorted array', () => {
    expect(bubblSort([2, 1, 3]).toBe([1, 2, 3]));
  });
});