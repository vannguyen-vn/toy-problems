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
  var res = [];
  var givenArr = ['R', 'P', 'S'];

  var eachString = function(str) {
    if (str.length === rounds) {
      res.push(str);
    } else {
      for (var i = 0; i < givenArr.length; i++) {
        eachString(str + givenArr[i]);
      }
    }
  }

  eachString('');
  return res;
};

console.log(rockPaperScissors(5));



