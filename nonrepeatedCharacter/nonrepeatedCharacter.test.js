const nonrepeatedCharacter = require('./nonrepeatedCharacter.js');

test.skip('it should find the first nonrepeated character', () => {
  var firstNonRepeatedCharacter = nonrepeatedCharacter.firstNonRepeatedCharacter;
  var testString = '\\I like to ride my bycicle';
  console.log(firstNonRepeatedCharacter(testString));
  expect(firstNonRepeatedCharacter(testString)).toEqual('\\')
})