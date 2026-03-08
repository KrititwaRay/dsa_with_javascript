class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class MyLinkedList {
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

    addToTail(val){
        let newNode = new Node(val);

        if(this.size == 0){
            this.head = newNode;
            this.size++;
            return
        }

        let current = this.head;

        while (current != null && current.next != null) {

            current = current.next
        }
        current.next = newNode
        this.size++
    }

    addAtIndex(index, val){

        if(index < 0  || index > this.size) return;

        let newNode = new Node(val);
        let current = this.head

        if(index == 0){
            
            newNode.next = current;
            this.head = newNode;
            this.size++
            return
        }

        if(index === this.size){
            while( current.next != null){

                current = current.next;
            }
            current.next = newNode
            this.size++
            return
        }
     
        for(let i = 0; i < index - 1; i++ ){
            current = current.next
          
        }
        newNode.next = current.next
        current.next = newNode

        this.size++
    }

}


let list = new MyLinkedList();

list.addToHead(10)
list.addToTail(20)
list.addToTail(40)
list.addAtIndex(3, 50)

console.log(JSON.stringify(list, null, 2));
