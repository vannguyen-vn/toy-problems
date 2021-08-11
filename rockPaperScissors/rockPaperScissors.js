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

var rockPaperScissors = function(rounds) {
  let rspOption = ['R', 'P', 'S'];

  let result = [];
  var rounds = rounds || 3;


  let plays = function(counter, string) {

    if (counter === rounds) {
      result.push(string);
      return;
    }

    counter++;

    for (let i = 0; i < rspOption.length; i++) {
      currentElementString = string +  rspOption[i];
      plays(counter, currentElementString);
    }
  }
  plays(0, '');

  return result;
};


// console.log(rockPaperScissors(2));