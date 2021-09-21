

describe("Test for evenOccurrence problem", function(){
  test("Should return null if input is an empty array", function(){

    // It's possible to have multiple expects in a single test like this. However, it is often unhelpful.
    // Just write two tests referring to the "Example Suites" example above for reference.
    expect(evenOccurrence([])).toBe(null);
  });

  test("Should return null if no repeating elements", function(){

    // It's possible to have multiple expects in a single test like this. However, it is often unhelpful.
    // Just write two tests referring to the "Example Suites" example above for reference.
    expect(evenOccurrence([1, 2, 3, 4])).toBe(null);
  });

  test("Should return the first even occurrence elements when there are multiple", function(){

    // It's possible to have multiple expects in a single test like this. However, it is often unhelpful.
    // Just write two tests referring to the "Example Suites" example above for reference.
    expect(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])).toBe(4);
  });

  test("Should be able to deal with negative numbers", function(){

    // It's possible to have multiple expects in a single test like this. However, it is often unhelpful.
    // Just write two tests referring to the "Example Suites" example above for reference.
    expect(evenOccurrence([1, 7, 2, -4, 5, -6, 8, 9, -6, -4])).toBe(-4);
  });
});

