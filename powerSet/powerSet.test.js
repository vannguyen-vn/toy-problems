const powerSet = require('./powerSet.js');

test.skip('it should find all the power sets for a string', () => {
  var actual = powerSet('jump')
  console.log(actual)
  expect(actual.length).toEqual(["-", "-j", "-ju", "-jm", "-jp", "-jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"].length)
})