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
  var reverseInt = 0;
  while (number >= 1) {
    number = number / 10;
    reverseInt += number % 1;
    reverseInt *= 10;
    number = Math.trunc(number);
  }
  return Math.trunc(reverseInt);

}
// module.exports = reverseInteger;
