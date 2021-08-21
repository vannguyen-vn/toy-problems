const deck = require('./shuffleDeck')

test('it should shuffle the deck', () => {
  var newDeck = deck.ordered();
  var shuffled = deck.shuffle(newDeck);
  expect(shuffled).not.toEqual(newDeck);
});