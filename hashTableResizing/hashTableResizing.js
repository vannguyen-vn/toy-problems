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

  result.insert = function(key, val) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    let tuple = [key, val];
    if (storage[index] === undefined) {
      storage[index] = [];
      storage[index].push(tuple);
    } else {
      let found = false;
      let bucket = storage[index];
      for (let i = 0; i < bucket.length; i++) {
        if(bucket[i][0] === key) {
          bucket[i][1] = val;
          found = true;
        }
      }
      if (!found) {
        bucket.push(tuple);
      }
    }
    size++;
    if (size / storageLimit > 3/4) {
      let oldStorage = storage.slice();
      storageLimit = storageLimit * 2;
      storage = [];
      size = 0;
      for (let i = 0; i < oldStorage.length; i++) {
        if (oldStorage[i]) {
          for(let j = 0; j < oldStorage[i].length; j++) {
            let old = oldStorage[i][j];
            this.insert(old[0], old[1]);
          }
        }
      }
    }
  };

  result.retrieve = function(key) {
    let result;
    let index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index]) {
      let bucket = storage[index]
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                result = bucket[i][1];
            }
        }
    }
    return result;
  };

  result.remove = function(key) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    let bucket = storage[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          size--;
        }
      }
    } else {
      return;
    }
    if (size / storageLimit < 1/4) {
      let oldStorage = storage.slice();
      storage = [];
      storageLimit = storageLimit / 2;
      size = 0;
      for (let i = 0; i < oldStorage.length; i++) {
        if (oldStorage[i]) {
          for (let j = 0; j < oldStorage[i].length; j++) {
            let oldTuple = oldStorage[i][j];
            result.insert(oldTuple[0], oldTuple[1]);
          }
        }
      }
    }
  };

  return result;
};

let ex = new makeHashTable();
console.log(ex.insert(1, 'one'));
console.log(ex.insert(2, 'two'));
console.log(ex.insert(3, 'three'));
console.log(ex.retrieve(2));
console.log(ex.remove(1));