const allAnagrams = require('./allAnagrams.js')
var allAnagramsF = allAnagrams.allAnagrams

test.skip('it should find all of the anagrams for a string of characters', () => {
  var string = 'daniel';
  var expectedOutput = [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ];
  var actual = allAnagramsF(string)
  console.log(actual)
  expect(actual).toEqual(expectedOutput);
})