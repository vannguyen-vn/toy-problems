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

// ordered deck returns
// var resultOfOrderedDeck = [
//   'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥',
//   '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♣',
//   '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣',
//   '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♠', '2♠',
//   '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠',
//   '10♠', 'J♠', 'Q♠', 'K♠', 'A♦', '2♦', '3♦',
//   '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦',
//   'J♦', 'Q♦', 'K♦'
// ]
var shuffleDeck = function (deck) {
  // iterate over the deck,
  for (let i = 0; i < deck.length; i++) {
    let randoNumba = Math.floor(Math.random() * (deck.length - 1))
    temp = deck[i];
    deck[i] = temp
    deck[randoNumba] = temp;
  }
  // console.log(deck)
  return deck;
  // assign temp to a random card determined by random num 1-52
  // swap with current card
  // return the deck
};

// Ordered deck generator provided for your testing convenience
// (You may alter this function, but an un  altered copy will be used for tests.)
var orderedDeck = function () {
  var suits = ['♥', '♣', '♠', '♦'];
  var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  var deck = [];

  suits.forEach(function (suit) {
    values.forEach(function (value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

// shuffleDeck(resultOfOrderedDeck)

let result = [];
while (deck.length > 0) {

  if (deck.length === 1) {
    result.push(deck[0]);
    break;
  }

  let randomIdx = Math.floor(Math.random() * deck.length);
  result.push(deck.splice(randomIdx, 1).join(''));
}
return result;