/**
 * Given an array containing a deck of cards, implement a function that shuffles
 * the deck.
 *
 * Example:
 *  var deck = orderedDeck();
 *  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 *  shuffleDeck(deck);
 *  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
 *
 * Note:
 *   A shuffled deck should be completely random. That means that a given card should
 *   be as likely as any other to appear in a given deck index, completely independent
 *   of the order of the input deck. Think carefully about how to be sure your algorithm
 *   generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.
 *
 * Extra credit:
 *   - Even a naive algorithm can easily run in linear time. However, does your
 *     algorithm remain unbiased as N (the deck size) increases? How do you know?
 *   - Once you have created a properly random, linear algorithm, what is its space complexity?
 *     There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).
 *
 * A further note on randomness:
 *   Technically, a computer-shuffled deck will usually be "pseudorandom",
 *   not "truly" random. However, the difference between the two is too small to
 *   be detectable by any known test.
 *   See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .
 *
 *   A human shuffler is much more biased; it takes around seven normal "riffle"
 *   shuffles before a real deck is actually randomized.
 *   See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf .
 */

//1. This method can't solve the biased algorithm.
var shuffleDeck = function(deck) {
  // change deck to an array that split each string.
  var singleChar = [];
  deck.forEach((subStr) => {
    singleChar = singleChar.concat(subStr.split(''));
  })

  //we rearrage the singleChar;
  var len = singleChar.length;
  var temp = [];
  for (var i = 0; i < len; i++) {
    var randomIndex = Math.floor(Math.random()* singleChar.length);
    temp.push(singleChar[randomIndex]);
    singleChar.splice(randomIndex, 1);
  }

  //now we get the random order of the singleChar;
  var mid = temp.length / 2;
  leftHalf = temp.slice(0, mid);
  rightHalf = temp.slice(mid, temp.length);
  var i = 0;
  var j = 0;
  var res = [];
  while (i < leftHalf.length && j < rightHalf.length) {
    var str = leftHalf[i] + rightHalf[j];
    res.push(str);
    i++;
    j++;
  }

  return res;
};

//2. THIS method can't solve the number of 10.
// var shuffleDeck = function(deck) {
//   for (var j = 0; j < deck.length; j++) {
//     var randomIndex = Math.floor(Math.random() * deck.length);
//     console.log(randomIndex);
//     var randomArr = deck[randomIndex].split('');
//     console.log(randomArr);
//     var currArr = deck[j].split('');
//     var tempSuit0 = currArr[0];
//     currArr[0] = randomArr[0];
//     randomArr[0] = tempSuit0;
//     deck[randomIndex] = randomArr.join("");
//     deck[j]= currArr.join("");
//   }
//   return deck;
// };

//3.
// var shuffleDeck = function(deck) {
//   for (var i = 0; i < deck.length; i++) {
//     if (deck[i].includes('10')) {
//       var i2 = deck[i][2];
//       deck[i] = 'I' + i2;
//       console.log(deck[i]);
//     }
//   }

//   for (var j = 0; j < deck.length; j++) {
//     var randomIndex = Math.floor(Math.random() * deck.length);
//     var randomArr = deck[randomIndex].split('');
//     var currArr = deck[j].split('');
//     var tempSuit0 = currArr[0];
//     currArr[0] = randomArr[0];
//     randomArr[0] = tempSuit0;
//     deck[randomIndex] = randomArr.join("");
//     deck[j]= currArr.join("");
//   }

//   for (var k = 0; k < deck.length; k++) {
//     if (deck[k].includes('I')) {
//       var k1 = deck[k][1];
//       deck[k] = '10' + k1;
//     }
//   }
//   return deck;
// };

// Ordered deck generator provided for your testing convenience
// (You may alter this function, but an unaltered copy will be used for tests.)
var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

var deck = orderedDeck();
console.log(deck);
console.log(shuffleDeck(deck));
