/*
* Write a function that generates every sequence of throws a single

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
/* It is combination problems
Input: there are 3 possible plays in an array called.
Output : return a matrix is stored in variable called
There are 3 possible play in the first round, 3 posible play in the second, 3 posible play in the third
We will hava an array : 3x3x3 = 27 arrays

 Basic of the structer recursion
 - We will put the recurson subroutin called with the emptyArray for 1 playedSofa and 1 round for 1 round left
  - If the roundLeft === 0
  - pushed the playedSofa to the outcomes
  - if there is still left we will keep gathering plays
  - and add to the outcomes
*/


var rockPaperScissors = function (rounds) {
  var choices = ['R', 'P', 'S'];
  var playedSoFar = [];
  var combination = [];

  var recursion = function (rounds) {
    if (rounds === 0 || rounds < 0) {
      return combination.push(playedSoFar.join(''));
    }

    for ( var i = 0; i < choices.length; i++  ) {
      playedSoFar.push(choices[i]);
      recursion(rounds - 1);
      playedSoFar.pop();
    }
  }
  recursion(rounds);
  return combination;
};