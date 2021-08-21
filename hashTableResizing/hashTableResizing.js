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
  result.storage = [];
  result.storageLimit = 4;
  result.size = 0;

  // initialization
  for (var i = 0; i < result.storageLimit; i++) {
    if (result.storage[i] === undefined) { result.storage.push([]); }
  }

  result.insert = function(key, value) {

    var hash = getIndexBelowMaxForKey(key, result.storageLimit);
    var hashStorage = result.storage[hash];

    for (var i = 0; i < hashStorage.length; i++) {
      if (hashStorage[i][0] === key) {
        hashStorage[i][0] = value;
        return;
      }
    }

    hashStorage.push([key, value]);
    result.size++;

    if (result.size > (3/4) * result.storageLimit) {
      result.resize(result.storageLimit * 2);
     }
  };

  result.retrieve = function(key) {
    var hash = getIndexBelowMaxForKey(key, result.storageLimit);
    var hashContainer = result.storage[hash];
    for (var i = 0; i < hashContainer.length; i++) {
      if (hashContainer[i][0] === key) {
        return hashContainer[i][1];
      }
    }
    return null;
  };

  result.remove = function(key) {
    var hash = getIndexBelowMaxForKey(key, result.storageLimit);
    var hashContainer = result.storage[hash];
    for (var i = 0; i < hashContainer.length; i++) {
      if (hashContainer[i][0] === key) {
        hashContainer.splice(i, 1);
        result.size--;
      }
    }

    if (result.size < (1/4) * result.storageLimit) {
      result.resize(result.storageLimit * (1/2));
    }
  };

  result.resize = function(newSize) {
    var oldStorage = result.storage;
    var oldStorageLimit = result.storageLimit;

    result.storageLimit = newSize;
    result.storage= [];
    for (var i = 0; i < newSize; i++) {
      result.storage.push([]);
    }

    for (var i = 0; i < oldStorageLimit; i++) {
      for (var j = 0; j < oldStorage[i].length; j++) {
        result.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
      }
    }
  };

  return result;
};

var hashTable = new makeHashTable();
console.log(hashTable.insert('a', 1));
//console.log(hashTable.retrieve('a'));
console.log(hashTable.storageLimit);
