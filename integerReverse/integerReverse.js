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

/*
% - returns last digit

*/

function reverseInteger(number) {

  var res = 0;

  while (number !== 0) {
    var last = number % 10;
    var newRes = (res * 10) + last;
    res = newRes;
    number = Math.floor(number / 10);
  }

  return res;

}
