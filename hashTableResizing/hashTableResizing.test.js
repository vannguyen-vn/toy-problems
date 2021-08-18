const makeHashTable = require('./hashTableResizing');
const getIndexBelowMaxForKey = require('./hashTableResizing');
describe('It should be able to insert key value pairs into hash table', () => {
  var testHash = makeHashTable();
  test('it should have a insert method', () => {
    expect(testHash.insert).toBeDefined;
  })
  test('insert should add value to hashtable', () => {
    testHash.insert('a', 1);
    expect(testHash.storage).toContain(['a', 1]);
  })
})