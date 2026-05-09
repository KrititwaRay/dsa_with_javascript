class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);



// iterative
var swapPairs = function (head) {
    if (!head || head.next === null) return head;

    let sentinalNode = new ListNode(0);

    sentinalNode.next = head;

    let p = sentinalNode;
    let c = head;
    let n = head.next;


    while(c && n){
        p.next = n;
        c.next = n.next;
        n.next = c;


        p = c;
        c = p.next;
        n = c && c.next

    }

    return sentinalNode.next;


};

let result = swapPairs(head);
console.log(JSON.stringify(result, null, 2))