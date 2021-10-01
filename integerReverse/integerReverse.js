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

function reverseInteger(number){ //105
  var n = number;
  var rev = 0;

  while (n > 0) {
    rev = (rev * 10) + (n % 10);
    n = n / 10;
  }

  return rev

}

// console.log(reverseInteger(27))

/*

 if (number < 10) {
    return number;
  }

  var remainder = number //5

  var total = 0 //100

  while (remainder > 10 ) { //5 > 10
    remainder -= 10;
    total += 10;
  }

  var firstDigit = remainder * 10; //5 * 10 = 50
  var finalDigit = total / 10; //100/10 = 10
  var reversedInt = firstDigit + finalDigit; //50 + 10 = 60

  return [reversedInt]


  */
