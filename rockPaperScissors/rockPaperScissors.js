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

var rockPaperScissors = function () {
  //Create a return array
  var combinations = [];

  //Create and RPS array
  var optionArray = ['R', 'P', 'S'];

  //loop over the RPS array
  for (var i = 0; i < optionArray.length; i++) {
  //loop over the RPS array
    for (var j = 0; j < optionArray.length; j++) {
      //loop over the RPS array
      for (var k = 0; k < optionArray.length; k++) {
      //push array[i][j][k] into the array
        combinations.push(array[i]+array[j]+array[k])
      }
    }
  }

  //return the array
  return combinations;
};

