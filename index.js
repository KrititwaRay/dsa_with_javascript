/* Intersection of Two Linked Lists */


/* 
List A: 10 → 20 → 30 → 40 → 50
                         ↑
List B:       15 → 25 ───┘

*/


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


let common = new Node(40);
common.next = new Node(50);


let headA = new Node(10);
headA.next = new Node(20);
headA.next.next = new Node(30);

// attach common part
headA.next.next.next = common;


let headB = new Node(15);
headB.next = new Node(25);

// attach same common nodes
headB.next.next = common;



const getIntersectionNode = function(headA, headB) {

    let mySet = new Set();

    while(headB) {
        mySet.add(headB)
        headB = headB.next;
    }

    while(headA){
        if(mySet.has(headA)) return headA;

        headA = headA.next
    }
    return null
    
    /* 
    
    Time Complexity: O(m + n) 
    Space Complexity: O(n)
    
    */
    
};


// let result = getIntersectionNode(headA, headB);

// console.log(result)


const getIntersectionNode_02 = function(headA, headB){
    
    let a = headA;
    let b = headB;

    while(a !== b){
        a = (a!=null) ? a.next : headB;
        b = (b!=null) ? b.next : headA;
    }

    return a;
}


let result_02 = getIntersectionNode_02(headA, headB);

console.log(result_02)