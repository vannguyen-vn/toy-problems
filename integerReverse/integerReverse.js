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
  if (number < 10) {
    return number;
  }
  var digits = [];
  var num = number / 10;
  var digit = (num - Math.floor(num)) * 10;
  digits.push(Math.round(digit));
  while (Math.floor(num) >= 10) {
    num = Math.floor(num) / 10;
    digit = (num - Math.floor(num)) * 10;
    digits.push(Math.round(digit));
  }
  digits.push(Math.floor(num));
  var result = 0;
  for (var i = 0; i < digits.length; i++) {
    result += digits[i] * Math.pow(10, digits.length - 1 - i);
  }
  return result;
}
