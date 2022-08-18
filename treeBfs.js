// Given a binary tree, populate an array to represent its level-by-level traversal.
// You should populate the values of all nodes of each level from left to right in separate sub-arrays.

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const traverse = (root) => {
//   result = [];
//   if (root === null) {
//     return result;
//   }
//   const queue = [];
//   queue.push(root);
//   while (queue.length > 0) {
//     const levelSize = queue.length;
//     currentLevel = [];
//     for (i = 0; i < levelSize; i++) {
//       currentNode = queue.shift();
//       currentLevel.push(currentNode.val);
//       if (currentNode.left !== null) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right !== null) {
//         queue.push(currentNode.right);
//       }
//     }
//     result.push(currentLevel);
//   }
//   return result;
// };

// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Level order traversal: ${traverse(root)}`);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
// You should populate the values of all nodes in each level from left to right in separate sub-arrays.

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const traverse = (root) => {
//   const result = [];
//   if (root === null) {
//     return result;
//   }
//   const queue = [];
//   queue.push(root);
//   while (queue.length > 0) {
//     let levelSize = queue.length;
//     currentLevel = [];
//     for (i = 0; i < levelSize; i++) {
//       currentNode = queue.shift();
//       currentLevel.push(currentNode.val);
//       if (currentNode.left !== null) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right !== null) {
//         queue.push(currentNode.right);
//       }
//     }
//     result.unshift(currentLevel);
//   }
//   return result;
// };
// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Reverse level order traversal: ${traverse(root)}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a binary tree, populate an array to represent its zigzag level order traversal.
// You should populate the values of all nodes of the first level from left to right,
// then right to left for the next level and keep alternating in the same manner for the following levels.

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const traverse = (root) => {
//   result = [];
//   if (root === null) {
//     return result;
//   }
//   const queue = [];
//   queue.push(root);
//   leftToRight = true;
//   while (queue.length > 0) {
//     levelSize = queue.length;
//     currentLevel = [];
//     for (i = 0; i < levelSize; i++) {
//       currentNode = queue.shift();
//       if (leftToRight) {
//         currentLevel.push(currentNode.val);
//       } else {
//         currentLevel.unshift(currentNode.val);
//       }
//       if (currentNode.left !== null) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right !== null) {
//         queue.push(currentNode.right);
//       }
//     }
//     result.push(currentLevel);
//     leftToRight = !leftToRight;
//   }
//   return result;
// };
// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// root.right.left.left = new TreeNode(20);
// root.right.left.right = new TreeNode(17);
// console.log(`Zigzag traversal: ${traverse(root)}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a binary tree, 
// populate an array to represent the averages of all of its levels.

// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// const findLevelAverage = (root) => {
//     result = [];
//     if (root === null) {
//         return result;
//     }
//     const queue = [];
//     queue.push(root);
//     while (queue.length > 0) {
//         let levelSize = queue.length,
//         levelSum = 0.0;
//         for (i = 0; i < levelSize; i++) {
//             currentNode = queue.shift();
//             levelSum += currentNode.val;
//             if (currentNode.left !== null) {
//                 queue.push(currentNode.left)
//             }
//             if (currentNode.right != null) {
//                 queue.push(currentNode.right);
//             }
//         }
//         result.push(levelSum / levelSize)
//     }
//     return result;
// }


// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.left.right = new TreeNode(2);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Level averages are: ${findLevelAverage(root)}`);