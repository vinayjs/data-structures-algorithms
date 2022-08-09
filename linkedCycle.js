class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// let head = new Node;
// let next = Object.keys(head);
// head.next = new Node
// console.log(head);

const is_Cycle = (head) => {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      return true;
    }
  }
  return false;
};

let head = new Node;
head.next = new Node;
head.next.next = new Node;
head.next.next.next = new Node;
head.next.next.next.next = new Node;
head.next.next.next.next.next = new Node


console.log(is_Cycle(head));
