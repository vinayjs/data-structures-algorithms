class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}


const middleVal = (head) => {
    let slow = head;
    let fast = head;
    while( fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next
    }
    return slow;
}

head = new Node;
head.next = new Node;
head.next.next = new Node;
head.next.next.next = new Node;
head.next.next.next.next = new Node;

console.log(middleVal(head.value));