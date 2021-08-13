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

  // initialization
  for (var i = 0; i < this.storageLimit; i++) {
    if (this.storage[i] === undefined) { this.storage.push([]); }
  }

  result.insert = function(key, value) {

    var hash = getIndexBelowMaxForKey(key, this.storageLimit);
    var hashStorage = this.storage[hash];

    for (var i = 0; i < hashStorage.length; i++) {
      if (hashStorage[i][0] === key) {
        hashStorage[i][0] = value;
        return;
      }
    }

    hashStorage.push([key, value]);
    this.size++;

    if (this.size > (3/4) * this.storageLimit) {
      this.resize(this.storageLimit * 2);
     }
  };

  result.retrieve = function(key) {
    var hash = getIndexBelowMaxForKey(key);
    var hashContainer = this.storage[hash];
    for (var i = 0; i < hashContainer.length; i++) {
      if (hashContainer[i][0] === key) {
        return hashContainer[i][1];
      }
    }
    return null;
  };

  result.remove = function(key) {
    var hash = getIndexBelowMaxForKey(key);
    var hashContainer = this.storage[hash];
    for (var i = 0; i < hashContainer.length; i++) {
      if (hashContainer[i][0] === key) {
        hashContainer.splice(i, 1);
        this.size--;
      }
    }

    if (this.size < (1/4) * this.storageLimit) {
      this.resize(this.storageLimit * (1/2));
    }
  };

  result.resize = function(newSize) {
    var oldStorage = this.storage;
    var oldStorageLimit = this.storageLimit;

    this.storageLimit = newSize;
    this.storage= [];
    for (var i = 0; i < newSize; i++) {
      newStorage.push([]);
    }

    for (var i = 0; i < oldStorageLimit; i++) {
      for (var j = 0; j < oldStorage[i].length; j++) {
        this.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
      }
    }
  };

  return result;
};
