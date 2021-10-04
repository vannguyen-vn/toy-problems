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
  var result = [];
  var recursiveFunction = (number, subtract) => {
    var count = 0;
    while (number % (subtract * 10) !== 0) {
      count++;
      number -= subtract;
    }
    result.push(count);
    if (number > 0) recursiveFunction(number, subtract * 10)
  }
  recursiveFunction(number, 1);
  return Number(result.join(''));
}
