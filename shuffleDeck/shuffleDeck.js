var shuffleDeck = function(deck) {
// loop through deck
// for each variable in the deck, run math .random and get a random index
// trade spaces with the card at that index and move to the next card
  for (var i = 0; i < deck.length; i++) {
    var randomIndex = Math.floor(Math.random() * 52);
    var currentCard = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = currentCard;
  }

return deck;
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