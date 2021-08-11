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
  // TODO: your solution here
  var moves = ['R', 'P', 'S'];
  var output = [];

  for (var a = 0; a < moves.length; a++) {
    for (var b = 0; b < moves.length; b++) {
      for (var c = 0; c < moves.length; c++) {
        output.push(moves[a] + moves[b] + moves[c]);
      }
    }
  }

  return output;
};

/*
RPS
RPS
RPS
*/


// var rockPaperScissors = function (rounds) {
//   // TODO: your solution here
//   var moves = ['R', 'P', 'S'];
//   var loops = 0;
//   var output = [];
//   var combo = '';

//   var innerRockPaperScissors = function(rounds) {
//     loops++;
//     if (loops > rounds) {
//       return;
//     }
//     moves.forEach(function(value){
//       combo += value;
//       if (combo.length === rounds) {
//         output.push(combo);
//         return;
//       }
//       innerRockPaperScissors(rounds);
//     })
//   }
//   innerRockPaperScissors(rounds);
//   return output;
// };




// var rockPaperScissors = function (rounds) {
//   // TODO: your solution here
//   var moves = ['R', 'P', 'S'];
//   var loops = 0;
//   var output = [];
//   var combo = '';

//   var innerRockPaperScissors = function(rounds) {
//     loops++;
//     moves.forEach(function(value){
//       combo += value;
//       if (combo.length === rounds) {
//         output.push(combo);
//         return;
//       }
//       if (loops <= rounds) {innerRockPaperScissors(rounds)};
//     })
//   }
//   innerRockPaperScissors(rounds);
//   return output;
// };



// var rockPaperScissors = function (rounds) {
//   // TODO: your solution here
//   var moves = ['R', 'P', 'S'];
//   var loops = 0;
//   var output = [];
//   var combo = '';

//   var innerRockPaperScissors = function(rounds) {
//     loops++;
//     moves.forEach(function(value){
//       combo += value;
//       if (combo.length === rounds) {
//         output.push(combo);
//         combo = combo.substring(0, combo.length - 1)
//         return;
//       }
//       if (loops <= rounds) {innerRockPaperScissors(rounds)};
//     })
//   }
//   innerRockPaperScissors(rounds);
//   return output;
// };








// var rockPaperScissors = function (rounds) {
//   // TODO: your solution here
//   var moves = ['R', 'P', 'S'];
//   var loops = 0;
//   var output = [];
//   var combo = '';

//   var innerRockPaperScissors = function(rounds) {
//     loops++
//     for (var i = 0; i < moves.length; i++) {
//       var letter = moves[i];
//       if (loops === rounds) {
//         return letter;
//       }
//       letter += innerRockPaperScissors(rounds);
//       output.push(letter);
//     }
//   }
//   innerRockPaperScissors(rounds);
//   return output;
// };