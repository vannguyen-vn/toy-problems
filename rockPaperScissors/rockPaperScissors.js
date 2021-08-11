/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (rounds) {
  // Number of rounds === the length of each string in the array
  // [ 'R', 'P', 'S' ]
  // ^ We want to iterate through each handsign for every character in a permutation, for every combination

  // I will declare an empty array
  // I will declare an array containing the elements R - P - S

  var combinations = [];
  var handsArray = ['R', 'P', 'S'];
  var str = '';

  var combine = function(str) {
    // BASE CASE
    // If str.length === rounds
    // --> return str
    if (str.length === rounds) {
      return str;
    }

    // For each in R, P, S
    // --> Empty string += current char
    // --> Push to the empty array recursively, i.e. emptyArr.push(rockPaperScissors(str, rounds))
    for (var i = 0; i < handsArray.length; i++) {
      // Build the string
      str += handsArray[i];

      // Run the recursive case. There's a chance we can get undefined values, so only push defined ones
      var combined = combine(str);
      if (combined) { combinations.push(combined); }

      // Need to slice away the end so we can finish out the loop with every combo
      str = str.slice(0, str.length - 1);
    }
  }

  // Begin recursion of inner function to fill combinations array
  combine(str);

  // return an array of unique sequences (the order matters) of R, P and S
  return combinations;
};
