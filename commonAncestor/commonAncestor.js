var Tree = function() {
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
 Tree.prototype.getClosestCommonAncestor = function(node1, node2) {
  if (node1 === node2) {
    return node1
  }
  var firstPath = this.getAncestorPath(node1)
  var secondPath = this.getAncestorPath(node2)
  if (firstPath === null || secondPath === null) {
    return null;
  }
  for (var i = firstPath.length - 1; i >= 0; i--) {
    if (secondPath.indexOf(firstPath[i]) > -1) {
      return firstPath[i]
    }
  }
  return null
};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
 Tree.prototype.getAncestorPath = function(node) {
  // TODO: implement me!
  var result = [];
  var innerFunc = (parent, node) => {
    if (result.length > 0) {
      result.unshift(parent);
      return
    }
    if (parent.children.length === 0) {
      return
    }     
    for (var i = 0; i < parent.children.length; i++) {
      if (result.length > 0) {
        result.unshift(parent)
        return
      }
      if (parent.children[i] === node) {
        result.push(parent.children[i]);
        result.unshift(parent)
        return;  
      } else {
        innerFunc(parent.children[i], node)
      }
    }
  }
  innerFunc(this, node)
  if (result.length === 0) {
    return null;
  } else {
    if (result.indexOf(this) > -1) {
      return result
    } else {
      result.unshift(this)
      return result;
    }
  }
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};