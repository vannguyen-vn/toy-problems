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
  if (number === 0) {
    return 0
  }

  var result = '';
  var temp;

  while (number > 0) {
    temp = number % 10
    result += temp;
    number = Math.trunc(number / 10);
  }

  return Number(result);
}

