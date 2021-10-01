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
I: number
O: number (digits reverted)
E: input = null --> null
C: only use integers, not convert input into string or array
 */

function reverseInteger(number){
  if (number.lenght = 0) {
    return null;
  }

  var rev = 0;
  while (number != 0) {
    rev = rev*10 + number%10;
    number = Math.floor(number/10);
  }
  console.log(rev);
  return rev;
}
