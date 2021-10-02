/**
 //Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

// input: number
// output: string (of that number as a fraction)
// constraints: use irregular fractions, simplified fraction
// edge cases: whole number could be returned as itself over 1
var toFraction = function(number) {
  var fraction = ''
  // covert number to string
  var stringNum = number.toString()
  // whole num will be string slice before the . converted back to a number
  var wholeNum = Number(stringNum.split('.')[0])
  // numerator will be string slice after the . converted back to a number
  var numerator = Number(stringNum.split('.')[1]) || 0
  // while denominator is less than or equal to numerator
  var denominator = 1
  while (denominator <= numerator) {
    // denominator will be denominator times ten
    denominator *= 10
  }
  // while denominator and numerator modulo 2 is 0
  while (numerator % 2 === 0 && denominator % 2 === 0) {
    // divide denominator and numerator by 2
    numerator /= 2
    denominator /= 2
  }
  // while denominator and numerator modulo 5 is 0
  while (numerator % 5 === 0 && denominator % 5 === 0) {
    // divide denominator and numerator by 5
    numerator /= 5
    denominator /= 5
  }
  // updatedNumerator add (multiply denominator times wholeNum) + numerator
  var updatedNumerator = numerator + denominator * wholeNum
  fraction = updatedNumerator + '/' + denominator
  return fraction
};

//Example:
console.log(toFraction(0.5)) // === '1/2'
console.log(toFraction(3.0)) // === '3/1'
console.log(toFraction(2.5)) // === '5/2'
console.log(toFraction(0.1)) // === '1/10'
console.log(toFraction(0.24)) // === '6/25'