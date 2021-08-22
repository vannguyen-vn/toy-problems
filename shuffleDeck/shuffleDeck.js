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
 var randInt = function(min, max) {
  var stepSize = 1 / (max - min + 1),
      nSteps = Math.floor(Math.random() / stepSize);
  return min + nSteps;
}

var shuffleDeck = function(deck) {
  // assign variable with the initial length of the deck to be used in our base case
  // let orderedDeck = orderedDeck();
  let startingLength = deck.length;
  // make a new results array to house the shuffled cards
  let shuffledDeck = [];

  // This part might live in a recursive function
  let shuffler = (deck) => {
    // grab the length of the remaining deck
    var max = deck.length - 1;
    if (max === -1) {
      return shuffledDeck;
    }
    // generate an unbiased random number based on the length of the deck
    var nextCard = deck.splice(randInt(0, max), 1);
    shuffledDeck.push(nextCard[0]);
    shuffler(deck);
  };
  shuffler(deck);
  return shuffledDeck;
};

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


console.log(shuffleDeck(orderedDeck()));