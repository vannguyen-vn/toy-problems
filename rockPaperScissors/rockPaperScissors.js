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
//Pseoducode
/*
Input : the number of round
output: A result array of the number arrays that they can have of the number of round.

// We have option array  = [Rock, Paper, Scissors]

// the result of 2 rounds would be R
  // We will interate over the option array : R P S  -> round = [[RR], [RP], [RS],[PR],[PP], [PS], [SR],[SP], [SS]]
  // We will interate over the round array : [[RRRP, .....]]
    // We count the round number and push into the result array.
    // if the round number  =  number of round
    // we return result array
    // else continue count the round number and push to the result array
// return the result array


*/
var rockPaperScissors = function (numOfRound) {
  var option = [R, P, S];
  var result = [];
  // We shound have a inner function to recusive: roundChoice()
  // Base case will be
  var roundChoice = function ()
    for (var i = 0; i < option.length; i++) {

    }

  return result
};

