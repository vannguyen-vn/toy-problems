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

  var revNumber = 0;
  while (number > 0) {
    revNumber = (revNumber * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  return revNumber;

}
// i- a positive number
// c- cant split, cant convert to string
// o- number
// e-  if all numbers are the same return number
// start at 0 and keep incrementing by 10% of number
// return number. if num < 10 , return num
//
// 10 => 1
// 56 => 65
// 98 => 89
// 399 => 993
// console.log(reverseInteger(56))
// 65 = 56 + y //9 = 9 * 1
// 98 = 89 + y //9 = 9 *1
// 10 = 1 + y // 9 = 9 * 1
// 83 = 38 + y // 45 = 9 * 5
// 47 = 74 + y // 27 = 9 * 3
// 300 = 3 + y // 297 = 9 * 33
// 700 = 7 + y // 293 = 9 * 77