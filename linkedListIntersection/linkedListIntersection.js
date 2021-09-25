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
function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!
  // i - two linked lists. may be intersected or not
  // o - null if not intersected, or the node itself if intersected
  // c - constraints
  // e - case of no node
  // start at the head of each linked list
  // while node exists, traverse and store values
  // check for repeated values of the node
  // if any values are repeated return the value
  // if none of the values are repeated, return null


}

