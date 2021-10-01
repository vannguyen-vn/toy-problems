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
  var result = '';
  var innerFunc = (num) => {
    var digit = num % 10;
    result += digit;
    var nextNum = Math.floor(num / 10);
    if (nextNum === 0) {
      return
    } else {
      innerFunc(nextNum)
    }
  }

  innerFunc(number)
  return Number(result);
}