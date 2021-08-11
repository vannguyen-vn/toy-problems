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

var rockPaperScissors = function (value) {
  // Variables
  var results = [];
  var base = ['R', 'P', 'S'];

  //Base Case
  if (value === 1) {
    return base;
  }
  // Store recursion
  var recursive = rockPaperScissors(value - 1);
  // Iterate through each option
  for(var i = 0; i < base.length; i++) {
    for(var j = 0; j < recursive.length; j++) {
      results.push(base[i] + recursive[j]);
    }
  }

  return results;
};

/*
rockPaperScissor(3);

[R, P, S]

[R
P,
S]

[RR, RP, RS,
 PR, PP, PS,
 SR, SP, SS]

[RRR, ...
PRR, ...
SRR, ...]
*/