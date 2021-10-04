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
  let reverse = 0;
  let rem = 0;

  while (number > 0) {
    reverse *= 10;
    rem = number % 10;
    number = (number - rem) / 10;

    reverse += rem;
  }

  return reverse;
}