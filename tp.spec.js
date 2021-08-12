const add = require("./exampleModule").add;
const multiply = require("./exampleModule").multiply;

const rockPaperScissors = require("./rockPaperScissors/rockPaperScissors");
const evenOccurrence = require("./evenOccurrence/evenOccurrence");
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
describe("rockPaperScissors Tests", function(){
  test("rockPaperScissors is a function that is defined", function(){

    // It's possible to have multiple expects in a single test like this. However, it is often unhelpful.
    // Just write two tests referring to the "Example Suites" example above for reference.
    //rockPaperScissors();
    expect(rockPaperScissors).toBeDefined();

  });
});

describe.only("evenOccurrence Tests", function(){
  test("evenOccurrence is a function that is defined", function(){

    // It's possible to have multiple expects in a single test like this. However, it is often unhelpful.
    // Just write two tests referring to the "Example Suites" example above for reference.
    //rockPaperScissors();
    expect(evenOccurrence).toBeDefined();

  });
  it("Should return the first number that occurred an even number of times", function(){
    expect(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])).toBe(4);
    expect(evenOccurrence([1, 4, 7, 2, 4, 5, 6, 8, 9, 6, 4])).toBe(6)
  });
  it("Should return null when there are no even occurrences", function(){
    expect(evenOccurrence([1, 7, 2, 4, 5, 8, 9, 6])).toBe(null);
    expect(evenOccurrence([1, 4, 7, 4, 2, 4, 5, 6, 8, 6, 9, 4, 6, 4])).toBe(null)
  });
});
