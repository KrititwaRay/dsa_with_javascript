/* 21. Merge Two Sorted Lists */

/* 
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.


Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]


Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.


*/



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
let list1 = null
list1 = new ListNode(2)
list1.next = new ListNode(5)
list1.next.next = new ListNode(7)
list1.next.next.next = new ListNode(8)

let list2 = null
list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)
list2.next.next.next = new ListNode(6)
list2.next.next.next.next = new ListNode(9)








var mergeTwoLists_1 = function (l1, l2) {

    if (!l1) return l2

    if (!l2) return l1

    let current = null

    if (l1.val < l2.val) {
        current = l1
        l1 = l1.next
    } else {
        current = l2
        l2 = l2.next
    }

    let head = current;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }

    if (!l1) {
        current.next = l2
    }
    if (!l2) {
        current.next = l1
    }

    return head
};


// let result = mergeTwoLists_1(list1, list2)

// console.log(JSON.stringify(result, null, 2))

var mergeTwoLists_2 = function (l1, l2) {

    let sentinalNode = new ListNode(0)

    let current = sentinalNode;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }

    if (!l1) {
        current.next = l2
    }
    if (!l2) {
        current.next = l1
    }

    return sentinalNode.next

    /* 
    
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    */
};


// let result = mergeTwoLists_2(list1, list2)

// console.log(JSON.stringify(result, null, 2))