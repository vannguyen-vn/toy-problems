var LRUCache = require('./lruCache.js');

describe.skip('lruCache.js', () => {
  var testCache = new LRUCache(5);
  test('it should add items to the cache', () => {
    testCache.set('first', 1);
    expect(testCache.size()).toEqual(1);
    testCache.set('second', 2);
    expect(testCache.size()).toEqual(2);
    testCache.set('third', 3);
    expect(testCache.size()).toEqual(3);
    testCache.set('fourth', 4);
    expect(testCache.size()).toEqual(4);
    testCache.set('fith', 5);
    expect(testCache.size()).toEqual(5);
  });
  test('it should not add the item if it is past the limit', () => {
    testCache.set('sixth', 6);
    expect(testCache.size()).toEqual(5);
    expect(testCache.get('fourth')).toEqual(4);
    expect(testCache.get('one')).toEqual(undefined);
  })
  test('getting an item should update it to the front of the list', () => {
    testCache.set('seventh', 7);
    testCache.set('eigth', 8);
    testCache.set('ninth', 9);
    expect(testCache.get('fourth')).toEqual(4);
  })
})