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
  // create options for rock-paper-scissors
  var options = ['R', 'P', 'S'];
  // create a result array for the outcomes of rock-paper-scissors
  var combinations = [];
  // create a combo string
  var combo = '';
  // create an inner recursive function taking in combo
  var recursive = function(combo) {
    if (combo.length === 3) {
    // push the string into result array declared in outer scope
      combinations.push(combo);
      return;
    }
    // iterate over the options array
    for (var i = 0; i < options.length; i++) {
      // use recursive function
        recursive(combo + options[i]);
    }
  }
  recursive(combo);
  // return result array
  return combinations;
};

rockPaperScissors();