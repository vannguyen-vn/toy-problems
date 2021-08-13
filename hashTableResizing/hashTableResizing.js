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

  for (var i = 0; i < storageLimit; i++) {
    storage.push([]);
  }


  result.insert = function(k, v) {
    var index = getIndexBelowMaxForKey(k, storageLimit);
    var keyExists = false;
    for (var i = 0; i < storage[index].length; i++) {
      var tuple = storage[index][i];
      if (tuple[0] === k) {
        keyExists = true;
        storage[index][i][1] = v;
      }
    }

    if (!keyExists) {
      storage[index].push([k, v]);
      size++;
       if (size > storageLimit * 0.75) {
         this.resize('increase');
       }
    }

  };

  result.retrieve = function(k) {
    var index = getIndexBelowMaxForKey(k, storageLimit);
    for (var i = 0; i < storage[index].length; i++) {
      var tuple = storage[index][i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }

  };

  result.remove = function(k) {
    var index = getIndexBelowMaxForKey(k, storageLimit);
    for (var i = 0; i < storage[index].length; i++) {
      var tuple = storage[index][i];
      if (tuple[0] === k) {
        storage[index].splice(i, 1);
        size--;
        if (size < storageLimit * 0.25) {
          this.resize('decrease');
        }
        break;
      }
    }
  };

  result.resize = function(direction) {
    var oldLimit = storageLimit;

    if (direction === 'increase') {
      var newLimit = oldLimit * 2;
    } else if (direction === 'decrease') {
      var newLimit = oldLimit / 2;
    }

    var newStorage = [];
    for (var i = 0; i < newLimit; i++) {
      newStorage.push([]);
    }

    for (var i = 0; i < storage.length; i++) {
      for (var j = 0; j < storage[i].length; j++) {
        var tuple = storage[i][j];
        var index = getIndexBelowMaxForKey(tuple[0], newLimit);
        newStorage[index].push(tuple);
      }
    }
    storage = newStorage.slice();
    storageLimit = newLimit;
  };

  return result;
};
