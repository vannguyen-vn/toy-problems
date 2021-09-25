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

  if (list1 === null || list2 === null) {
    return null;
  }

  var set = {};

  var head1 = list1;
  var head2 = list2;

  while (head1 !== null) {
    set.add(head1);
    head1 = head1.next;
  }

  while (head2 !== null) {
    if (set.has(head2)) {
      return head2;
    }
    head2 = head2.next;
  }

  return null;
}

