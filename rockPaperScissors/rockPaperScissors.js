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
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/



//PRACTICE: recursive - master for databses
//Remember to remove comments from code after implementing

var rockPaperScissors = function (n) { //3

  const options = ["R", "P", "S"]

  let combinations = [] //["RRR", "RRP", "RRS", "RPR", "RPP", "RPS", "RSR", "RSP", "RSS", "PRR" ]

  const buildSequences = (option, round) => { //"PRR", 3

    if (round === n) { //N: 3, R: 3
      combinations.push(option)
      return;
    }

    return options.forEach(nextOption => buildSequences(option + nextOption, round + 1))
      /*
      "RR", 2
      "RRR", 3
      "RRP", 3
      "RRS", 3
      "RP", 2
      "RPR", 3
      "RPP", 3
      "RPS", 3
      "RS", 2
      "RSR", 3
      "RSP", 3,
      "RSS", 3,
      "P", 1,
      "PR", 2
      "PRR", 3

      */

  }

  options.forEach(option => buildSequences(option, 1)) //(R, 1),

  return combinations

}

// console.log('rps 3', rockPaperScissors(5))

/* First Solve
var rockPaperScissors1 = function () {
  //Create a return array
  var combinations = [];

  //Create and RPS array
  var optionArray = ['R', 'P', 'S'];

  //loop over the RPS array
  for (var i = 0; i < optionArray.length; i++) {
  //loop over the RPS array
    for (var j = 0; j < optionArray.length; j++) {
      //loop over the RPS array
      for (var k = 0; k < optionArray.length; k++) {
      //push array[i][j][k] into the array
        combinations.push(optionArray[i]+optionArray[j]+optionArray[k])
      }
    }
  }

  //return the array
  return combinations;
};
console.log('rps1 3', rockPaperScissors1());

*/