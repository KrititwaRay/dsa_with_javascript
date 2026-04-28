class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class MyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    addToHead(val){
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++
    }

    addAtTail(val){
        let newNode = new Node(val)

        if(this.head == null){
            this.head = newNode;
            this.size++
            return
        }


        let current = this.head;

        while(current.next != null){
            current = current.next
        }
        current.next = newNode;
        this.size++

    }

    addToIndex(index, val){
        if(index < 0 || index > this.size) return;

        let newNode = new Node(val)
        if(index === 0){
           newNode.next = this.head;
            this.head = newNode;
            this.size++;
            return;
        }
        let current = this.head;

        if(index == this.size) {
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode
            this.size++

            return
        }

        for(let i = 0; i< index - 1; i++){
            current = current.next
        }

        
        newNode.next = current.next
        current.next = newNode;
        this.size ++
        
        
    }

    get(index){
        if(index < 0 || index >= this.size) return -1

        let current = this.head;

        for(let i=0; i< index; i++){
            current = current.next
        }

       return current.val;
    }

    deleteAtIndex(index){
       if (index < 0 || index >= this.size) return;

        // delete head
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        current.next = current.next.next;
        this.size--;

    }
}

let list = new MyLinkedList();

list.addToHead(10)
list.addAtTail(20)
list.addAtTail(30)
list.addAtTail(40)
list.addAtTail(50)
// list.addToIndex(5,60)
// console.log(list.get(5));
// list.deleteAtIndex(5)






// console.log(JSON.stringify(list, null, 2));