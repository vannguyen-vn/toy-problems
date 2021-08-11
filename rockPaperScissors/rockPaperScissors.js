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
// input: optional number
// output: array of string

// use inner function? need to save results outside of recursion somehow

// create result array
// set rounds if there is input
// create array to iterate through

// use inner function that takes in input of the string so far
// if there is no input then start with an empty string
// iterate over the array
  // use recursion to add each element to the string and input that into the inner function

var rockPaperScissors = function (rounds) {
  var result = [];
  if (rounds === undefined) {
    rounds = 3;
  }
  var rounds = rounds;
  var choices = ['R', 'P', 'S'];

  var innerFunc = function(resultStr) {
    if (resultStr === undefined) {
      resultStr = '';
    }
    if (resultStr.length === rounds) {
      result.push(resultStr);
      return;
    }
    for (var i = 0; i < choices.length; i++) {
      innerFunc(resultStr + choices[i]);
    }
  }
  innerFunc();
  return result;
};
