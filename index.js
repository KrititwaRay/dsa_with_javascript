function Node(val) {
    this.val = val;
    this.next = null
}



function MyLinkedList() {
    this.head = null;
    this.size = 0;
}


MyLinkedList.prototype.addAtHead = function (val) {

    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size = this.size + 1;

}


MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
    if (this.size == 0) {
        newNode.next = this.head;
        this.head = newNode;
        this.size = this.size + 1;
    }

    if (this.size !== 0) {
        let current = this.head;

        while (current.next != null) {
            current = current.next
        }
        current.next = newNode
    }
    this.size++

}


MyLinkedList.prototype.addAtIndex = function (index, val) {


    if (index < 0 || index > this.size) return;

    if (index == 0) {
        this.addAtHead(val)
        return

    } else if (index == this.size) {
        this.addAtTail(val)
        return
    } else {
        let newNode = new Node(val);
        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next

        }
        newNode.next = current.next
        current.next = newNode
    }
    this.size++
}

MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;

    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next
    }
    return current.val
}

MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return

    if (index === 0) {
        this.head = this.head.next;
        this.size--
        return
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {

        current = current.next
    }

    current.next = current.next.next;
    this.size--


}


MyLinkedList.prototype.middleNode = function (){
    let head = this.head;

    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow;


}


let list = new MyLinkedList();

list.addAtHead(10);
list.addAtTail(20);
list.addAtTail(30);
list.addAtTail(40);
list.addAtTail(50);


list.middleNode()
// console.log(JSON.stringify(list, null, 3));
/* 

{
   "head": {
      "val": 10,
      "next": {
         "val": 20,
         "next": {
            "val": 30,
            "next": {
               "val": 40,
               "next": {
                  "val": 50,
                  "next": null
               }
            }
         }
      }
   },
   "size": 5
}



*/