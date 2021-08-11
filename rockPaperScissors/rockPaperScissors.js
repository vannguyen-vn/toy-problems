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

  //create answers array with possible answers
  var answers = ['R','P','S'];
  var rounds = 3;

  //on first iteration, create result array with answers times number of rounds spots (3 rounds -> ['r','p','s','r','p','s','r','p','s'])


  var result = [];

  for (var i = 0; i < 3; i++) {
    for(var j = 0; j < answers.length; j++) {
      result.push(answers[j]);
    }
  }

  var getSequences = function(rounds) {
    var count = 0;
    for(var i = 0; i < result.length; i++) {
        var counter = 0;
        if (i !== 0 && i % 3 === 0) {
           count++;
        }
        while (counter < 2) {
           result[i] = result[i].concat(answers[count]);
           counter++;
       }
    }
  }
  var results = getSequences(rounds);
  return result;
};



