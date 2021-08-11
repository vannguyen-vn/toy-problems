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
  var choices = ['R','P','S'];
  var combos = [];
  var rounds = rounds || 3;

  var genCombos = function(game) {
    var game = game || '';

    if (game.length === rounds) {
      combos.push(game);
    } else {
      for (var i = 0; i < choices.length; i++) {
        currentGame = game + choices[i];
        genCombos(currentGame);
      }
    }

  }
  genCombos();
  //innner function is called recursively
    //check if combo str length === 3, if so, push combo to results and return back to previous recursive call which will continue the loop
    //loops over choices
      //for each one, concat it to game hands
        //recursively call inner function and pass in currentGame hands -- this is tricky, bc cannot change the value of game before passing it in

  //invoke inner function

  return combos;
};



