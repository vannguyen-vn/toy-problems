var shuffleDeck = function(deck) {
  // Your code here
// create result array

// create inner function takes in two params, array and array lengths
// if the array length is 0,
//   return
// run math.random between the numbers 0 and 51 (look this up how to do it)
// use the number from math.random and splice the deck at that index.
// push that spliced element into the result array
// us recursion with the new array and well as the new length

// return result array

var result = [];
var resultArray = []
var deckSize = deck.length;
var shuffler = function(deck, deckSize) {

  if(deck.length === 0) {
    return;
  }
  var randomIndex = Math.floor(Math.random() * deckSize);
  var card = deck.splice(randomIndex, 1);
  result = result.concat(card);
  shuffler(deck, deckSize - 1)
}

shuffler(deck, deckSize);

return result;
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