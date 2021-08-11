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

var rockPaperScissors = function (
) {

   // TODO: your solution here


  /********************************

  ---------- brute force ---------

  *********************************/
  var input = ['R', 'S', 'P'];
  var newString = newString || '';
  var result = [];
  var temp1 = '';
  var temp2 = '';

  for(var i = 0; i < input.length; i++) {
    newString += input[i];
    var temp1 = newString;
    for(var j = 0; j < input.length; j++) {
      newString = temp1;
      newString += input[j];
      var temp2 = newString;
        for(var k = 0; k < input.length; k++) {
          newString = temp2;
          newString += input[k];
          if(newString.length === 3) {
            result.push(newString);
          }

        }
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