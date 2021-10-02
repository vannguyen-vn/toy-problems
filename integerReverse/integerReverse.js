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
  var count = 0;
  var first = Number.parseInt(Math.log10(number));
  var result = 0;
  var cur = number;
  while (first >= 0) {
    result += Number.parseInt(cur / Math.pow(10, first)) * Math.pow(10, count);
    cur -= Number.parseInt(cur / Math.pow(10, first)) * Math.pow(10, first);
    count++;
    first--;
  }
  return result;
}
