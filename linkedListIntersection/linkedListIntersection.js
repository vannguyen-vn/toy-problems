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
  var listOne = new Node(list1);
  var listTwo = new Node(list2);

  for (var i = 0; i < listOne.value.length; i++) {
    if (listTwo.value.indexOf(listOne.value[i]) > -1) {
      return listOne.value[i];
    }
  }

  return null;

  // listOne.next = listOne.value[0];
  // listTwo.next = listTwo.value[0];

  // while (listOne.next || listTwo.next) {
  //   if (listOne.next )
  // }

}

// console.log(linkedListIntersection([1,2,3], [2,3,4]))

