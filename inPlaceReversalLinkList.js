// Given the head of a Singly LinkedList, reverse the LinkedList.
// Write a function to return the new head of the reversed LinkedList.
// class Node {
//     constructor(value, next = null){
//         this.value = value;
//         this.next = next;
//     }
//     printList() {
//         let temp = this;
//         while(temp !== null){
//             console.log(`${temp.value} `);
//             temp = temp.next;
//         }
//         console.log()
//     }
// }

// const reverse = (head) => {
//     let current = head;
//     previous = null;
//     while(current !== null){
//         next = current.next;
//         current.next = previous;
//         previous = current;
//         current = next
//     }
//     return previous;
// }

// const head = new Node(2);
// head.next = new Node(4);
// head.next.next = new Node(6);
// head.next.next.next = new Node(8);
// head.next.next.next.next = new Node(10);

// console.log("previous node : ");
// head.printList();
// result = reverse(head);
// console.log("new order : ")
// result.printList();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given the head of a LinkedList and two positions ‘p’ and ‘q’,
// reverse the LinkedList from position ‘p’ to ‘q’.

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
//   printList() {
//     let temp = this;
//     while (temp != null) {
//       console.log(`${temp.value}`);
//       temp = temp.next;
//     }
//     console.log();
//   }
// }

// const reverseSubList = (head, p, q) => {
//   if (p === q) {
//     return head;
//   }
//   let current = head,
//     previous = null;
//   let i = 0;
//   while (current !== null && i < p - 1) {
//     previous = current;
//     current = current.next;
//     i += 1;
//   }
//   const lastNodeFirstPart = previous;
//   const lastNodeSubList = current;
//   let next = null;
//   i = 0;
//   while (current !== null && i < q - p + 1) {
//     next = current.next;
//     current.next = previous;
//     previous = current;
//     current = next;
//     i += 1;
//   }
//   if (lastNodeFirstPart !== null) {
//     lastNodeFirstPart.next = previous;
//   } else {
//     head = previous;
//   }
//   lastNodeSubList.next = current;
//   return head;
// };

// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);

// console.log("previous node : ");
// head.printList();
// result = reverseSubList(head, 3, 5);
// console.log("new order : ");
// result.printList();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
//   printList() {
//     let temp = this;
//     while (temp != null) {
//       console.log(`${temp.value}`);
//       temp = temp.next;
//     }
//     console.log();
//   }
// }

// const reverseElements = (head, k) => {
//   if (k <= 1 || head === null) {
//     return head;
//   }
//   let current = head,
//     previous = null;
//   while (true) {
//     const lastNodePrevPart = previous;
//     const lastNodeSubList = current;
//     let next = null;
//     let i = 0;
//     while (current !== null && i < k) {
//       next = current.next;
//       current.next = previous;
//       previous = current;
//       current = next;
//       i += 1;
//     }
//     if (lastNodePrevPart !== null) {
//       lastNodePrevPart.next = previous;
//     } else {
//       head = previous;
//     }
//     lastNodeSubList.next = current;
//     if (current === null) {
//       break;
//     }
//     previous = lastNodeSubList;
//   }
//   return head;
// };
// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// head.next.next.next.next.next.next = new Node(7);
// head.next.next.next.next.next.next.next = new Node(8);

// console.log("previous node : ");
// head.printList();
// result = reverseElements(head, 3);
// console.log("new order : ");
// result.printList();
