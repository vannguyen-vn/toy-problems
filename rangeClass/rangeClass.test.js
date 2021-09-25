const Range = require('./rangeClass.js');

describe.skip('range class', () => {
  var testRange = new Range(0, 10, 2);
  test.skip('it shoud handle positive direction ranges', () => {
    expect(testRange.size()).toEqual(6);
    // testRange.each((item) => console.log(item));
    expect(testRange.includes(4)).toEqual(true);
  })
  test('it should handle negative direction ranges', () => {
    var myRange = new Range(10, 0, 2);
    // myRange.each((item) => console.log(item));
    expect(myRange.size()).toEqual(6);
    expect(myRange.includes(4)).toEqual(true);
  })
  test('if no end is declared it should only include start', () => {
    var oneRange = new Range(5);
    expect(oneRange.size()).toEqual(1);
  })
  // test('it should return null if start is undefined', () => {
  //   expect(new Range()).toEqual(null);
  // })
  test('if count is undefined it should default to 1', () => {
    var testRange = new Range(0, 10)
    expect(testRange.size()).toEqual(11);
  })
  test('handle size in constant time', () => {
    var testRange = new Range(-3, 12, 3);
    expect(testRange.size()).toEqual(6);
  })
  test('handle size in constant time where end - start is not divisible by step', () => {
    var testRange = new Range(0, 10, 4);
    expect(testRange.size()).toEqual(3);
  })
})