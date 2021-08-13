/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
      size++;
    } else {
      var tuples = storage[index];
      var keyPos;
      for (var i = 0; i < tuples.length; i++) {
        if (tuples[i][0] === key) {
          keyPos = i;
          break;
        }
      }
      if (keyPos !== undefined) {
        tuples[keyPos][1] = value;
      } else {
        tuples.push([key, value]);
        size++;
      }
    }
    this.resize();
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var tuples = storage[index];
    if (tuples !== undefined) {
      for (var i = 0; i < tuples.length; i++) {
        if (tuples[i][0] === key) {
          return tuples[i][1];
        }
      }
    }
    return undefined;
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var tuples = storage[index];
    if (tuples !== undefined) {
      var removeInd;
      for (var i = 0; i < tuples.length; i++) {
        if (tuples[i][0] === key) {
          removeInd = i;
          break;
        }
      }
      if (removeInd !== undefined) {
        tuples.splice(removeInd, 1);
        size--;
        this.resize();
      }
    }
  };

  result.resize = function() {
    if(size >= 0.25 * storageLimit && size <= 0.75 * storageLimit) {
      return;
    } else if (size < 0.25 * storageLimit) {
      var newStorageLimit = storageLimit * 0.5;
    } else {
      var newStorageLimit = storageLimit * 2;
    }
    var newStorage = [];
    for (var i = 0; i < storageLimit; i++) {
      if (storage[i] !== undefined) {
        var tuples = storage[i];
        for (var j = 0; j < tuples.length; j++) {
          var key = tuples[j][0];
          var value = tuples[j][1];
          var newIndex = getIndexBelowMaxForKey(key, newStorageLimit);
          if (newStorage[newIndex] === undefined) {
            newStorage[newIndex] = [[key, value]];
          } else {
            newStorage[newIndex].push([key, value]);
          }
        }
      }
    }
    storage = newStorage;
    storageLimit = newStorageLimit;
  };
  result.getStorageLimit = function() {
    return storageLimit;
  };
  return result;
};

/*
//Test Cases
describe('hashTable', function() {
  var hashTable;
  var pairs = [['a', 1],['b', 2],['c', 3],['d', 4],['e', 5],['f', 6],['g', 7]];

  beforeEach(function() {
    hashTable = makeHashTable();
  });

  it('store value that was inserted', function() {
    hashTable.insert('a', 1);
    expect(hashTable.retrieve('a')).to.equal(1);
  })

  it('overwrite values with same key', function() {
    hashTable.insert('a', 1);
    hashTable.insert('a', 2);
    expect(hashTable.retrieve('a')).to.equal(2);
  })

  it('not contain value that was removed', function() {
    hashTable.insert('a', 1);
    hashTable.insert('b', 2);
    hashTable.remove('a');
    expect(hashTable.retrieve('a')).to.equal(undefined);
  })

  it('should handle hash function collisions', function() {
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable.insert('a', 1);
    hashTable.insert('b', 2);
    expect(hashTable.retrieve('a')).to.equal(1);
    expect(hashTable.retrieve('b')).to.equal(2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  it('should double in size when needed', function() {
    _.each(pairs, function(pair) {
      hashTable.insert(pair[0], pair[1]);
      expect(hashTable.retrieve(pair[0])).to.equal(pair[1]);
    });
    expect(hashTable.getStorageLimit()).to.equal(16);
  });


  it('should halve in size when needed', function() {
    _.each(pairs, function(pair) {
      hashTable.insert(pair[0], pair[1]);
      expect(hashTable.retrieve(pair[0])).to.equal(pair[1]);
    });
    expect(hashTable.getStorageLimit()).to.equal(16);
    hashTable.remove('a');
    hashTable.remove('b');
    hashTable.remove('c');
    hashTable.remove('d');
    expect(hashTable.getStorageLimit()).to.equal(8);
  });
});
*/
