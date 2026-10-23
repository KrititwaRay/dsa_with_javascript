/* 160. Intersection of Two Linked Lists */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Create nodes for List A
let headA = new Node(4);
headA.next = new Node(1);

// Create the intersection nodes
let intersection = new Node(8);
intersection.next = new Node(4);
intersection.next.next = new Node(5);

// Connect List A to the intersection
headA.next.next = intersection;

// Create nodes for List B
let headB = new Node(5);
headB.next = new Node(6);
headB.next.next = new Node(1);

// Connect List B to the SAME intersection node
headB.next.next.next = intersection;




/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let n = 0;
    let pA = headA;
    let m = 0;
    let pB = headB;


    while (pA) {
        ++n
        pA = pA.next
    }
    while (pB) {
        ++m
        pB = pB.next
    }

    let diff = Math.abs(n - m);


    if (n > m) {
        let temp = headA;
        headA = headB;
        headB = temp;
    }

    for (let i = 0; i < diff; i++) {
        headB = headB.next;
    }

    pA = headA
    pB = headB


    while(pA != pB){
        pA = pA.next
        pB = pB.next
    }

    return pA





};



var getIntersectionNode1 = function (headA, headB) {
    let pA = headA
    let pB = headB


    while(pA != pB){
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }

    return pA

};


