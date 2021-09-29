var translateRomanNumeral = require('./romanNumeralTranslator.js');

describe.skip('roman numeral translator', () => {
  test('it can translate single length numerals', () => {
    expect(translateRomanNumeral('I')).toEqual(1);
    expect(translateRomanNumeral('V')).toEqual(5);
    expect(translateRomanNumeral('X')).toEqual(10);
    expect(translateRomanNumeral('L')).toEqual(50);
    expect(translateRomanNumeral('C')).toEqual(100);
    expect(translateRomanNumeral('D')).toEqual(500);
    expect(translateRomanNumeral('M')).toEqual(1000);
  });
  test('it can translate larger numerals', () => {
    expect(translateRomanNumeral('MDLX')).toEqual(1560);
    expect(translateRomanNumeral('CVI')).toEqual(106);
  })
  test('it can handle numerals with subtractions', () => {
    expect(translateRomanNumeral('LM')).toEqual(950);
    expect(translateRomanNumeral('MCDLIX')).toEqual(1459);
  })
})