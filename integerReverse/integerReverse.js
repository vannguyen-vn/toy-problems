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
  var rev = 0;
  while(number > 0) {
    rev = (rev * 10) + (number % 10);
    number = parseInt(number/10);
  }
  return rev;
}
