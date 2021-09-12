const commonCharacters = require('./commonCharacters.js');

describe.skip('commonCharacters', () => {
  test('it returns all the letters of the both strings with no repeat characters', () => {
    expect(commonCharacters('acexivou', 'aegihobu')).toEqual('aeiou')
  })
  test('it should be able handle any number of string inputs', () => {
    var strings = ['i like bikes', 'i like to ride my bikes', 'i like beer', ]
    expect(commonCharacters(...strings)).toEqual('ilkeb')
  })
  test('it should return the letters in the order that they appeared in', () => {
    expect(commonCharacters('zyx', 'xzy')).toEqual('zyx')
  })
})