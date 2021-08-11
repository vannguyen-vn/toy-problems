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

  // var rockPaperScissors = function (item) {
  //   // declare a result array
  //   var storage = [];
  //   // declare a var to store the three rounds
  //   var rounds = item || '';
  //   // declare game variables
  //   var gameVariables = ['R', 'P', 'S'];

  //   // check if rounds have a length of three
  //   if (rounds.length === 3) {
  //     // push it to storage array
  //     return rounds;
  // //     return;
  //   }

  //   // iterate over game variables
  //   for (var i = 0; i < gameVariables.length; i++) {
  //     // recursively call rockPaperScissors on each variable
  //     var currentItem = gameVariables[i];
  // //     rounds = rounds.concat(rockPaperScissors(currentItem));
  //        storage = storage.concat(rockPaperScissors(rounds + currentItem));
  // //     rounds += currentItem;
  //   }

  //   // retun storage
  //   return storage;
  // };

  // rockPaperScissors();

  var rockPaperScissors = function (rounds, item) {
    // declare a result array
    var storage = [];
    // declare a var to store the three rounds
    var item = item || '';
    // declare game variables
    var gameVariables = ['R', 'P', 'S'];

    // check if rounds have a length of three
    if (item.length === rounds) {
      // push it to storage array
      return item;
  //     return;
    }

    // iterate over game variables
    for (var i = 0; i < gameVariables.length; i++) {
      // recursively call rockPaperScissors on each variable
      var currentItem = gameVariables[i];
  //     rounds = rounds.concat(rockPaperScissors(currentItem));
         storage = storage.concat(rockPaperScissors(rounds, item + currentItem));
  //     rounds += currentItem;
    }

    // retun storage
    return storage;
  };

  rockPaperScissors(3);