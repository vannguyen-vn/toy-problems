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
    var storage = [];
    var item = item || '';
    var gameVariables = ['R', 'P', 'S'];

    if (item.length === rounds) {
      return item;
    }

    for (var i = 0; i < gameVariables.length; i++) {
      var currentItem = gameVariables[i];
         storage = storage.concat(rockPaperScissors(rounds, item + currentItem));
    }

    return storage;
  };
  rockPaperScissors(3);


  var rockPaperScissors = function(rounds) {
    var combosArr = [];
    var rounds = rounds;
    var combo = '';
    var options = ['R', 'P', 'S'];

    var innerFunction = function(combo) {
      if (combo.length === rounds) {
        combosArr.push(combo);
        return;
      }

      for (var i = 0; i < options.length; i++) {
        var letter = options[i];
        innerFunction(combo + letter);
      }
    }
    innerFunction(combo);
    return combosArr;
  }

  rockPaperScissors(4);