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

   // TODO: your solution here


  /********************************

  ---------- Recursion ---------

  *********************************/
  n = n || 3;
  var result = [];
  var input = ['R','S','P'];

  if (n === 1) {
    return input;
  };

  for (var i = 0; i < input.length; i++) {
    var temp = rockPaperScissors(n-1);

    for (var j = 0; j < temp.length; j++) {
      result.push(input[i]+temp[j]);
    }
  }

  return result;
};

// Other thoughts:

  // use a tree structure to resolve the question
  // create a tree with n+1 layers
  // traverse the tree and record each of the combination

  // what is the time complexity?

  /*
  var newString = '';
  var result = [];
/*
  var helperFn = function(item) {
    if (newString.length === 3) {
      return newString;
    } else {
      newString += item;
    }
  };

  var generateOutcome = function() {
    ['R', 'S', 'P'].forEach(function(item) {
      if (newString.length < 3) {
        newString += item;
        generateOutcome();
      } else {
        result.push(newString);
      }
    });
  }

  generateOutcome();
  */