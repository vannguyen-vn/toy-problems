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

var rockPaperScissors = function(num) {
  // implement this function using recursion, need to create a recursion function inside rockPaperScissors and call it
  var num = num || 3;
  var options = ['R', 'P', 'S'];
  var outputArr = [];

  var throwFunction = function(throws) {
    var throws = throws || '';

    // when the throws string's length is equal to num, push it into the output array and return out
    if (throws.length === num) {
      outputArr.push(throws);
      return;
    }

    options.forEach(function(item) {
      throwFunction(throws + item);
    });
  }

  // Call the recursive function with parameter num
  throwFunction();
  return outputArr;
};

rockPaperScissors(5);