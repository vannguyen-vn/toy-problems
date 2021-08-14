const makeHashTable = require('./hashTableResizing.js');
const getIndexBelowMaxForKey = require('./hashTableResizing.js')

describe.only("hashTableResizing Tests", function(){
  var testTable = makeHashTable();

  it('Should have methods named "insert", "remove" and "retrieve"', function(){
    expect(testTable.insert).toBeDefined();
    expect(testTable.retrieve).toBeDefined();
    expect(testTable.remove).toBeDefined();

  });

  it('Should store values that are retrievable'), function() {

  });

  // it("Should return the first number that occurred an even number of times", function(){
  //   expect(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])).toBe(4);
  //   expect(evenOccurrence([1, 4, 7, 2, 4, 5, 6, 8, 9, 6, 4])).toBe(6)
  // });
  // it("Should return null when there are no even occurrences", function(){
  //   expect(evenOccurrence([1, 7, 2, 4, 5, 8, 9, 6])).toBe(null);
  //   expect(evenOccurrence([1, 4, 7, 4, 2, 4, 5, 6, 8, 6, 9, 4, 6, 4])).toBe(null)
  // });
});