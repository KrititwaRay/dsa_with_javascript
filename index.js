class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let head = null
head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(6)
head.next.next.next = new Node(3)
head.next.next.next.next = new Node(4)
head.next.next.next.next.next = new Node(5)
head.next.next.next.next.next.next = new Node(6)



const removeElements = function (head, val) {
   
    let sentinalNode = new Node(0);
    sentinalNode.next = head;
    head = sentinalNode
    let previous = sentinalNode;

    while (previous && previous.next) {
        if (previous.next.val == val) {
            previous.next = previous.next.next
        } else {

            previous = previous.next;
        }
    }
    head = head.next
    return head
};


let result = removeElements(head, 6)