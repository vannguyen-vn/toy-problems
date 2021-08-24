const deck = require('./shuffleDeck')

test.skip('it should shuffle the deck', () => {
  var newDeck = deck.ordered();
  var shuffled = deck.shuffle(newDeck);
  expect(shuffled).not.toEqual(newDeck);
});