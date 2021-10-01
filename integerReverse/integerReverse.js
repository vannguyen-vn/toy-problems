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
// 123456
function reverseInteger(number) {
  // TODO: Implement this function!
  var result = [];

  function inner(number) {
    if (number === 0) {
      return;
    }

    const digit = number % 10;
    result.push(digit);

    inner((number - digit) / 10);
  }
  inner(number);

  return Number(result.join(''));
}
