class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}
let head = new Node;
head.next = new Node;
head.next.next = new Node;
head.next.next.next = new Node;
head.next.next.next.next = new Node;
head.next.next.next.next.next = new Node

const startCycle = (head) => {
    cylceLength = 0;
    let slow = head;
    let fast = head;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(slow == fast){
            cylceLength = calculate_cycleLength(slow);
            break;
        }
    }return startCycle(head, cylceLength);
}

// const calculate_cycleLength = (slow) => {
//     let current = slow;
//     cylceLength = 0;
//     while(true){
//         current = current.next;
//         cylceLength += 1;
//         if(current === slow) {
//             break;
//         }
//     }
//     return cylceLength;
// }
// console.log(calculate_cycleLength(head));

// const find_start = (head, cylceLength) => {
//     let pointer1 = head;
//     let pointer2 = head;
//     while(cylceLength > 0) {
//         pointer2 = pointer2.next;
//         cylceLength -= 1;
//     }
//     while(pointer1 != pointer2){
//         pointer1 = pointer1.next
//         pointer2 = pointer2.next
//     }
//     return pointer1;   
// }

