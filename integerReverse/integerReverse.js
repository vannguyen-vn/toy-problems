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
  let reverse = 0, last = 0;
  while (number!==0) {
      last = number % 10;
      number = parseInt(number/10);
      reverse = reverse * 10 + last;
 }
 return reverse;
}

console.log(reverseInteger(-123))