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
  if (rounds === 1) {
    return ['R', 'P', 'S'];
  }

  var preArr = rockPaperScissors(rounds - 1);

  preArr.forEach(function(item, i) {
    var ele = preArr[i];
    preArr[i] = ele + 'R';
    preArr.push(ele + 'P');
    preArr.push(ele + 'S');
  })
  return preArr;
};



