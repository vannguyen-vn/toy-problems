const RPS = require('./rockPaperScissors.js');

test('should return an array length of 27', () => {
  expect(RPS().length).toEqual(27);
});

test('should return an array',() => {

  expect(RPS().slice(0,2)).toEqual(['RRR', 'RRP'])
});

// test.skip to skip