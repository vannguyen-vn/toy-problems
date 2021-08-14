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
  var newHashTable = {};
  newHashTable.storage = [];
  newHashTable.storageLimit = 4;
  newHashTable.size = 0;
  newHashTable.storageCopy = null;

  newHashTable.doubleHash = function() {
    this.size = 0;
    this.storageLimit *= 2;
    this.storageCopy = this.storage;
    this.storage = [];
    for (var i = 0; i < this.storageCopy.length; i++) {
      if (!this.storageCopy[i]) { continue; }
      for (var j = 0; j < this.storageCopy[i].length; j++) {
        this.insert(this.storageCopy[i][j][0], this.storageCopy[i][j][1]);
      }
    }
    this.storageCopy = null;
  }

  newHashTable.halfHash = function() {
    this.size = 0;
    this.storageLimit /= 2;
    this.storageCopy = this.storage;
    this.storage = [];
    this.storageCopy.forEach(bucket => {
      if (!bucket) { return; }
      bucket.forEach(tuple => {
        this.insert(tuple[0], tuple[1]);
      });
    });
    this.storageCopy = null;
  }

  newHashTable.insert = function(key, value) {
    if (!this.storage[getIndexBelowMaxForKey(key, this.storageLimit)]) {
      this.storage[getIndexBelowMaxForKey(key, this.storageLimit)] = [[key, value]];
    } else {
      this.storage[getIndexBelowMaxForKey(key, this.storageLimit)].push([key, value]);
    }
    this.size++;
    if (this.size > this.storageLimit * 0.75) { this.doubleHash(); }
  };

  newHashTable.retrieve = function(key) {
    var result;
    if (!this.storage[getIndexBelowMaxForKey(key, this.storageLimit)]) { return result; }
    this.storage[getIndexBelowMaxForKey(key, this.storageLimit)].forEach(tuple => {
      if (tuple[0] === key) { result = tuple[1]; }
    });
    return result;
  };

  newHashTable.remove = function(key) {
    this.storage[getIndexBelowMaxForKey(key, this.storageLimit)].forEach((tuple, index, collection) => {
      if (tuple[0] === key) {
        collection.splice(index, 1);
        this.size--;
      }
    });
    if (this.size < this.storageLimit * 0.25) { this.halfHash(); }
  };

  return newHashTable;
};