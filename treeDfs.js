// Given a binary tree and a number ‘S’,
// find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

// class TreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// const hasPath = (root, sum) => {
//   if (root === null) {
//     return false;
//   }
//   if (root.val === sum && root.left === null && root.right === null) {
//     return true;
//   }
//   return (
//     hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val)
//   );
// };

// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Tree has path: ${hasPath(root, 23)}`);
// console.log(`Tree has path: ${hasPath(root, 16)}`);
