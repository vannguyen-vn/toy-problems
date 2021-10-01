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
  let result = 0;
  while (number > 0) {
    result = (result * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  return result;
}

// console.log(reverseInteger(12));
// console.log(reverseInteger(123));
// console.log(reverseInteger(1234));