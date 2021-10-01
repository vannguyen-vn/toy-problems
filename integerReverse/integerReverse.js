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

  let result = 0;
  let place  = 10;

  while(number) {
    result *= 10;
    result += (number % place) / (place / 10); 
    number -= number % place;
    place  *= 10; 
  }

  return result;
  }
