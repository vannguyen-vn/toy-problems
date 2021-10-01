/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  // TODO: Implement this function!
  if (number < 10) {
    return number;
  } else if (number < 100) {
    let ones = number % 10;
    let tens = Math.floor(number / 10);
    return (10 * ones) + tens;
  } else if (number < 1000) {
    let ones = number % 10;
    let tens = (Math.floor(number / 10)) % 10;
    let hundreds = Math.floor(number / 100);
    return (100 * ones) + (10 * tens) + hundreds;
  } else if (number < 10000) {
    let ones = number % 10;
    let tens = (Math.floor(number / 10)) % 10;
    let hundreds = (Math.floor(number / 100)) % 10;
    let thousands = Math.floor(number / 1000);
    return (1000 * ones) + (100 * tens) + (10 * hundreds) + thousands;
  } else if (number < 1000000) {
    let ones = number % 10;
    let tens = (Math.floor(number / 10)) % 10;
    let hundreds = (Math.floor(number / 100)) % 10;
    let thousands = Math.floor(number / 1000) % 10;
    let tenThousands = Math.floor(number / 10000) % 10;
    return (10000 * ones) + (1000 * tens) + (100 * hundreds) + (10 * thousands) + (1 * tenThousands);
  }

}

// module.exports = reverseInteger;