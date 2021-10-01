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
  var negative = false;

  if (number < 0) {
    number = -number;
    var negative = true;
  }
  // Create Variable to represent our reversed number
  var reverse = 0;

  while (number > 0) {
    // getting the remainder of number modulo 10 will give us the last digit
    var lastDigit = number % 10;
    // we cant concat digits so multiplying reverse by 10 will open a slot to add the next last digit,
    // if reverse is greater than 0. If not then reverse becomes the last digit.
    // 0 * 10 = 0, 0 + 4 = 4 / 4 * 10 = 40, / 40 + 5 = 45. this is the example if input is 54.
    reverse = (reverse * 10) + lastDigit;
    // this step allows us to 'pop' off the last digit.
    // ex: 318 / 10 = 31.8 but Math.floor makes sure that 31 is outputted.
    number = Math.floor(number / 10);
  }

  return (negative ? -reverse : reverse);
}

// module.exports = reverseInteger;
