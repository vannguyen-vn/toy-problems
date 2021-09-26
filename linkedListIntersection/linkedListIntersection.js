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
  if(list1 === null || list2 === null){
    return null
  }
  let pointer1 = list1;
  let pointer2 = list2;
  while(pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2= pointer2.next;
    if(pointer1 === pointer2) {
      return pointer1
    }
    if(pointer1 === null){
      pointer1 = list2;
    }
    if(pointer2 === null) {
      pointer2 = list1;
    }
  }

  return pointer1;
}

// var list1 = Node('A');
//     var nodeB = list1.next = Node('B');
//     var nodeC = nodeB.next = Node('C');
//     var nodeD = nodeC.next = Node('D');
//     var nodeE = nodeD.next = Node('E');
//     var nodeF = nodeE.next = Node('F');
//     var list2 = Node('X');
//     var nodeY = list2.next = Node('Y');
//     nodeY.next = nodeD;

//     console.log(linkedListIntersection(list1, list2));

