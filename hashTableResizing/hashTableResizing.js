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

var makeHashTable = function(limit) {
  var result = {};
  result.storage = [];
  result.storageLimit = limit || 4;
  result.size = 0;

  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, this.storageLimit);
    var tuple = [key, value];
    if(this.storage[index] !== undefined) {
      this.storage[index].push(tuple);
    } else {
      this.storage[index] = [tuple];
    }
    this.size ++;
    if (this.size > this.storageLimit * .75) {
      var newHash = makeHashTable(this.storageLimit * 2)
      for (var i = 0; i < this.storage.length; i ++) {
        if (this.storage[i]) {
          for (var j = 0; j < this.storage[i].length; j ++) {
            var tuple = this.storage[i][j]
            newHash.insert(tuple[0], tuple[1]);
          }
        }
      }
      this.storage = newHash.storage;
      this.storageLimit = newHash.storageLimit;
      this.size = newHash.size;
    }
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, this.storageLimit);
    for (var i = 0; i < this.storage[index].length; i++) {
      if(this.storage[index][i][0] === key) {
        return this.storage[index][i][1];
      }
    }
    return undefined;
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, this.storageLimit);
    for (var i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        var returnVal = this.storage[index][i][1];
        this.storage[index].splice(i, 1);
        break;
      }
    }
    this.size --;
    if (this.size < this.storageLimit * .25) {
      var newHash = makeHashTable(this.storageLimit / 2);
      for (var i = 0; i < this.storage.length; i++) {
        if (this.storage[i]) {
          for (var j = 0; j < this.storage[i].length; j ++) {
            var tuple = this.storage[i][j]
            newHash.insert(tuple[0], tuple[1]);
          }
        }
      }
      this.storage = newHash.storage;
      this.storageLimit = newHash.storageLimit;
      this.size = newHash.size;
    }
    return returnVal;

  };

  return result;
};
//module.exports = makeHashTable;
//module.exports = getIndexBelowMaxForKey