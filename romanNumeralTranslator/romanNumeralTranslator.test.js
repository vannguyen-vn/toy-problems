const { translateRomanNumeral } = require('./romanNumeralTranslator.js');

it('converts the correct', () => {
  expect(translateRomanNumeral('LXV')).toBe(65);
});

it('converts the correct subtract', () => {
  expect(translateRomanNumeral('LIV')).toBe(54);
});