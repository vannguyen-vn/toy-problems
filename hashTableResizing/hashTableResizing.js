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

  result.insert = function(key, val) {
    // TODO: implement `insert`
    var max = 3/4;
    var hashKey = getIndexBelowMaxForKey(key, this.storageLimit);
    if (this.storage[hashkey] === undefined) {
      this.storage[hashkey] = [];
    }
    this.storage[hashKey].push(val);
    this.size++;
    if ((this.size / this.storageLimit) > max) {
      storageLimit *= 2;
    }

  };

  result.retrieve = function(/*...*/
) {
    // TODO: implement `retrieve`
  };

  result.remove = function(/*...*/
) {
    // TODO: implement `remove`
  };

  return result;
};

// var hashTable = new makeHashTable();
// hashTable.insert();