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

  var results = [];
  var rsp = ['R','P','S']


    for(var r = 0; r < rsp.length; r++) {
      for(var s = 0; s < rsp.length; s++) {
        for(var p = 0; p < rsp.length; p++) {
        results.push([rsp[r], rsp[s], rsp[p]]);
        }
      }
    }

  return results;
};


// Very simple and basic approach, I had trouble figuring out a way to solve using recursion.
// Will defintely come back and figure out the extra credit
