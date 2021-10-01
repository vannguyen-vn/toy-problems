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
  var findDigit = function(placeValue) {
    return (Math.floor(number / placeValue)) % 10;
  }

  //create array of numbers using findDigit
  var digitsReversed = [];
  //iterate from 1 to ? // while loop: while iterater is less than number?
  for (var place = 1; place <= number; place *= 10) {
    // use *= 10 to multiply by ten each time
    // run findDigit with iterator as placeValue
    let digit = findDigit(place);
    // push each one into the array
    digitsReversed.push(digit);
  }
  console.log(digitsReversed);

  //iterate across array starting at highest place-value number
  var result = 0;
  var newPlace = 1;
  for (var i = digitsReversed.length - 1; i >= 0; i--) {
    result += (digitsReversed[i] * newPlace);
    newPlace *= 10;
  }
    // increment iterator in the same way
    // add each product to a running total result

    return result;
}

// module.exports = reverseInteger;