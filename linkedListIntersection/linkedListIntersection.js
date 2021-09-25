/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node
* at which the intersection of two linked lists begins,
* or null if there is no such intersection.
*
* Example:
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return D
* as the node of intersection.
*
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return NULL
* as there is no point of intersection.
*
*    A → B → C → D
*    X → Y → Z
*
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  for (var key1 in list1) {
    for (var key2 in list2) {
      return helper(list1[key1], list2[key2])
    }
  }

  var helper = function (node1, node2) {
    if (node1.value === node2.value) {
      return node1.value;
    } else if (node1.next !== null && node2.next !== null) {
      helper(node1.next, node2.next);
    } else {
      return false;
    }
  };
}

