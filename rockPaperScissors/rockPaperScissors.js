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

// I: array of strings or single strings or none?
// O: array containing every possible combination of RPS, will be long
// C: none
// E: none

var rockPaperScissors = function (/* R, P, S? */) {
//var choices = ['R', 'P', 'S'];?
// create a result array
// create an empty string
// create a count variable?

// WALKTHROUGH
// result = ['RRR'];
// current letter = R
// var combination = '';
// count = 0;

// APPROACH ONE - using a count variable --> I like this best, just something missing
// iterate over the choices array
    // if count does not equal 3
      // add current element to the empty string
      // increase count by one
      // decrement loop by one
    // else
      // push string into result array
      // reset string to be empty
      // reset count to 0
      // decrement loop by one
      // then ???


// APPROACH TWO - nested for loops --> NOPE
// iterate over the choices array
  // add current element to combination three times
    // add combination to result array
    // reset string to empty
    // iterate over the choices array again
      // add current element to combination two times and next element once
      // add current element to combination two times and last element once
      // add combination to result array
      // reset string to empty
      // iterate over the choices array again
        // NOPE


// APPROACH THREE - recursion?
// create an inner function that takes an array to call

  // base case
    // what's the smallest piece?
      // if there is only one choice?
  // if length of array is 1
    // add its element as a string into result

  // what will make the function need to continue?
    // if the array has more than one element?
  // iterate over the array
    // call the inner function on the current element
      // No...

// call the inner function

// return the result array
};
