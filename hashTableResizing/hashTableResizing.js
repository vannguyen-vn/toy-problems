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


  result.insert = function(str) {
    var index = getIndexBelowMaxForKey(str, storageLimit);
    var currentBucket = storage[index];
    if (currentBucket === undefined) {
      var newBucket = [];
      newBucket.push(str);
      storage[index] = newBucket;
    } else {
      storage[index].push(str);
    }
    size += 1;
    if (size > storageLimit * 0.75) {
      result.resize(storageLimit * 2);
    }
    console.log(storage);
  };

  result.retrieve = function(str) {
    var index = getIndexBelowMaxForKey(str, storageLimit);
    var bucket = storage[index];
    if (!bucket) {
      return undefined;
    } else {
      var ele;
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i] === str) {
          ele = bucket[i];
        }
      }
    }
    return ele;
  };

  result.remove = function(str) {
    var index = getIndexBelowMaxForKey(str, storageLimit);
    var bucket = storage[index];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i] === str) {
        bucket[i] = undefined;
        size -= 1;
        if (size < storageLimit * 0.25) {
          result.resize(storageLimit * 0.5);
        }
      }
    }
  };

  result.resize = function(newLimit) {
    var oldStorage = storage;
    storage = [];
    storageLimit = newLimit;
    size = 0;
    for (var i = 0; i < oldStorage.length; i++) {
      var str = oldStorage[i];
      var index = getIndexBelowMaxForKey(str, storageLimit);
      var currentBucket = storage[index];
      if (currentBucket === undefined) {
        var newBucket = [];
        newBucket.push(str);
        storage[index] = newBucket;
      } else {
        storage[index].push(str);
      }
    }
  }

  return result;
};

var newHashTab = makeHashTable();
newHashTab.insert('h', newHashTab);
newHashTab.insert('y', newHashTab);
newHashTab.insert('i', newHashTab);
newHashTab.insert('p', newHashTab);
newHashTab.insert('o', newHashTab);
newHashTab.remove('o');
console.log(newHashTab.retrieve('o'));