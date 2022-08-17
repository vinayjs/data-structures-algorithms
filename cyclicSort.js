// We are given an array containing n objects.
// Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence.
// This means that the object with sequence number 3 was created just before the object with sequence number 4.

// Write a function to sort the objects in-place on their creation sequence number in O(n)
// and without using any extra space. For simplicity,
// let’s assume we are passed an integer array containing only the sequence numbers,
// though each number is actually an object.
// Input: [1, 5, 6, 4, 3, 2]
// Output: [1, 2, 3, 4, 5, 6]

// Input: [2, 6, 4, 3, 1, 5]
// Output: [1, 2, 3, 4, 5, 6]

// const cyclicSort = (num) => {
//     let i = 0;
//     while(i < num.length){
//         const j = num[i] - 1;
//         if(num[i] !== num[j]) {
//             [num[i],num[j] ] = [num[j], num[i]];
//         }else{
//             i += 1;
//         }
//     }
//     return num;
// }

// console.log(cyclicSort([2, 6, 4, 3, 1, 5]));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// We are given an array containing n distinct numbers taken from the range 0 to n. Since the array has only n numbers out of the total n+1 numbers,
// find the missing number.

// Input: [3, 0, 4, 1]
// Output: 2

// Input: [8, 3, 5, 2, 4, 6, 0, 1]
// Output: 7

// const findMissingNum = (nums) => {
//     let i = 0;
//     const n = nums.length;
//     while (i < n) {
//         j = nums[i];
//         if (nums[i] < n && nums[i] !== nums[j]) {
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//         } else {
//             i += 1;
//         }
//     }
//     for (i = 0; i < n; i++) {
//         if(nums[i] !== i){
//             return i;
//         }
//     }
//     return n;
// }
// console.log(findMissingNum([3, 0, 4, 1]));
// console.log(findMissingNum([3, 0, 5, 1, 2]));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// We are given an unsorted array containing numbers taken from the range 1 to ‘n’.
// The array can have duplicates, which means some numbers will be missing.
// Find all those missing numbers.

// Input: [2, 3, 1, 8, 2, 3, 5, 1]
// Output: 4, 6, 7
// Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.

// const findMissingNum = (nums) => {
//   let i = 0;
//   while (i < nums.length) {
//     const j = nums[i] - 1;
//     if (nums[i] !== nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//     } else {
//       i += 1;
//     }
//   }
//   console.log("sort :", nums);
//   missingNumbers = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) {
//       missingNumbers.push(i + 1);
//     }
//   }
//   return missingNumbers;
// };
// console.log(findMissingNum([2, 3, 1, 8, 2, 3, 5, 1]));
