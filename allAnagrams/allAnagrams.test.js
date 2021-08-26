const allAnagrams = require('./allAnagrams.js')
var allAnagramsF = allAnagrams.allAnagrams

test('it should find all of the anagrams for a string of characters', () => {
  var string = 'apps';
  var expectedOutput = [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ];
  var actual = allAnagramsF(string)
  console.log(actual.length)
  expect(actual).toEqual(expectedOutput);
})