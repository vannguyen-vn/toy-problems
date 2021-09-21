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

  var resize = (size) => {
    var pairs = [];
    for (let i = 0; i < result.storage.length; i++) {
      if (storage[i]) {
        for (let j = 0; j < result.storage[i].length; j++) {
          if (storage[i][j]) {
            paris.push(storage[i][j]);
          }
        }
      }
    }
    result.storageLimit = size;
    result.storage = [];
    size = 0;
    for (let i = 0; i < pairs.length; i++) {
      result.insert(pairs[i][0], pairs[i][1]);
    }
  }

  result.insert = function(key, val) {
    // TODO: implement `insert`
    const index = getIndexBelowMaxForKey(key, result.storageLimit);
    // result.storage[index] = result.storage[index] || [];
    let pairs = result.storage[index];
    // let pair;
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = val;
        return;
      }
    }

    pairs.push([key, val]);
    result.size++;

    if (result.size >= result.storageLimit * 0.75) {
      resize(storageLimit * 2);
    }
  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve`
    let index = getIndexBelowMaxForKey(key, result.storageLimit);
    let pairs = result.storage[index];
    if (pairs) {
      for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        if (pair && pair[0] === key) {
          return pair[1];
        }
      }
    }
  };

  result.remove = function(key) {
    // TODO: implement `remove`
    let index = getIndexBelowMaxForKey(key, result.storageLimit);
    let pairs = result.storage[index];
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i];
      if (pair[0] === key) {
        let val = pair[1];
        pairs.splice(i, 1);
        size--;
        if (size <= storageLimit * 0.25) {
          resize(storageLimit / 2);
        }
        return val;
      }
    }
  };

  return result;
};

// var hashTable = new makeHashTable();
// hashTable.insert();