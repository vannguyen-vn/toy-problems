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

var rockPaperScissors = function (n) {
  if (n === undefined) {
    return rockPaperScissors(3);
  }

  if (n === 1) {
    return ["R", "P", "S"];
  }

  return inductionStep(rockPaperScissors(n - 1));
};

function inductionStep (game) {
    var res = [];
    for (var i = 0; i < game.length; i++) {
      res.push("R" + game[i]);
      res.push("P" + game[i]);
      res.push("S" + game[i]);
    }
    return res;

  // for (var i = 0; i < res.length; i++) {
  //   finalRes.push("R" + res[i]);
  //   finalRes.push("P" + res[i]);
  //   finalRes.push("S" + res[i]);
  // }

  // for (var i = 0; i < finalRes.length; i++) {
  //   nextRes.push("R" + finalRes[i]);
  //   nextRes.push("P" + finalRes[i]);
  //   nextRes.push("S" + finalRes[i]);
  // }

  // return nextRes;
};

