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

/*
rounds is rounds or default 3
moves: ['R', 'P', 'S']
combo: [], empty

recursive function - current string, rounds left
base case
if current.length === rounds
  push current string into combo
  return

else
recursive call
loop through moves - for loop
  append ith element of moves onto current

call match function

return combo
*/

var rockPaperScissors = function (rounds) {
  rounds = rounds || 3;
  var combo = [];
  var moves = ['R', 'P', 'S'];

  var match = function (current) {
    if (current.length === rounds) {
      combo.push(current);
      return;
    }

    for (var i = 0; i < moves.length; i++) {
      match(current + moves[i]);
    }

  }
  match('');
  return combo;
};

// Separate Way
// var match = function (current) {
//   current = current || '';
//   if (current.length === rounds) {
//     combo.push(current);
//     return;
//   }

//   for (var i = 0; i < moves.length; i++) {
//     match(current + moves[i]);
//   }

// }
// match();

