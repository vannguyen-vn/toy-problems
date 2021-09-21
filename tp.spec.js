const add = require("./exampleModule").add;
const multiply = require("./exampleModule").multiply;
const shuffleDeck = require('./shuffleDeck/shuffleDeck.js').shuffleDeck;
const orderedDeck = require('./shuffleDeck/shuffleDeck.js').orderedDeck;
const Tree = require('./treeCountLeaves/treeCountLeaves.js');
const commonCharacters = require('./commonCharacters/commonCharacters.js');

/*
A "describe" block can be used to group together multiple tests
which check the same nodule or function.
 */
describe("Example tests", function(){

  // Individual tests can be run using the "it" or "test" methods, they are aliased and are equivalent
  it("Should add small numbers", function(){
    /* This test suite is written in Jest. There are many more methods other than "toBe"
    Go to: https://jestjs.io/docs/en/expect
    to find more options if "toBe" doesn't fit your use case.
    */
    expect(add(1,1)).toBe(2);
  });

  // In addition to expected, "happy path", behaviour as above, you should also test your edge cases
  it("Should return Infinity for numbers of type Number which are very large", function(){
    expect(add(1.6E310, 1)).toBe(Infinity);
  });
});

/*
You start here. 1 describe block per toy problem.
Notice the method "only" above. Because it is there, the describe block below won't run.
You'll need to remove the "only" from the block above. You can use that method to only run tests
on the toy problem you're currently working on. https://jestjs.io/docs/en/api#describeonlyname-fn
*/
xdescribe("shuffleDeck", function(){
  test("should return a different deck of the same size", function(){
    // It's possible to have multiple expects in a single test like this. However, it is often unhelpful.
    // Just write two tests referring to the "Example Suites" example above for reference.
    var testDeck = orderedDeck();
    var testShuffle = shuffleDeck(testDeck);
    var original = orderedDeck();

    expect(shuffleDeck([1,0]).length).toBe(2);
    expect(testShuffle).not.toBe(testDeck);
  });
});

describe("countLeaves", function(){
  it("should count all the leaves", function(){
    // It's possible to have multiple expects in a single test like this. However, it is often unhelpful.
    // Just write two tests referring to the "Example Suites" example above for reference.
    var root = new Tree();
    root.countLeaves(); // 1
    root.addChild(new Tree());
    root.countLeaves(); // still 1
    root.addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].children[0].addChild(new Tree());
    var count = root.countLeaves(); // 3

    expect(count).toBe(3);
  });
});

xdescribe("commonCharacters", function(){
  it("should return a new string with all repeated characters", function() {
    var a = 'acexivou';
    var b = 'aegihobu';
    var result = commonCharacters(a, b);

    expect(result).toBe('aeiou');
  });
});