const { LRUCache } = require('./lruCache');

// --- 5 limit
// <-- front         back -->
// {one} {two} {three} {four}
// set {five}
// {five} {one} {two} {three} {four}
// set {six}
// {six} {five} {one} {two} {three} / pop {four}
// get {one}
// get {two}
// {two} {one} {six} {five} {three}
// set {seven}
// {seven} {two} {one} {six} {five}

const cache = new LRUCache(3);
cache.set('dog', 1);
cache.set('cat', 2);
cache.set('mouse', 3);
cache.set('horse', 4);

describe('LRUCache', () => {
  it('should exist when defined', () => {
    expect(cache).toBeDefined();
  });

  it('correctly sets limit', () => {
    expect(cache.limit).toBe(3);
  });

  it('should be full', () => {
    expect(cache.isFull()).toBe(true);
  });

  it('should maintain limit', () => {
    expect(Object.keys(cache.mapping).length).toBe(3);
    expect(cache.size()).toBe(3);
  });

  it('should update order on get', () => {
    cache.get('horse');
    cache.get('cat');
    const oldest = cache.viewOldestKey();
    expect(oldest).toBe('mouse');
  });

  it('should update order on set', () => {
    cache.set('horse', 10);
    cache.set('mouse', 9);
    const oldest = cache.viewOldestKey();
    expect(oldest).toBe('cat');
  })

});

