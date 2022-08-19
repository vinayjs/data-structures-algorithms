// Given a set with distinct elements,
// find all of its distinct subsets.

// Input: [1, 3]
// Output: [], [1], [3], [1,3]

// Input: [1, 5, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]

// const findSubset = (nums) => {
//     const subsets = [];
//     subsets.push([]);
//     for (let i = 0; i < nums.length; i++) {
//         currentNumber = nums[i];
//         const n = subsets.length;
//         for (j = 0; j < n; j++) {
//             const set1 = subsets[j].slice(0);
//             set1.push(currentNumber);
//             subsets.push(set1);
//         }
//     }
//     return subsets;
// }

// console.log('Here is the list of subsets : ');
// let result = findSubset([1,3]);
// result.forEach((subset) => {
//     console.log(subset);
// })

// Given a set of numbers that might contain duplicates,
// find all of its distinct subsets.

// Input: [1, 3, 3]
// Output: [], [1], [3], [1,3], [3,3], [1,3,3]

// const findSubsets = (nums) => {
//   nums.sort((a, b) => a - b);
//   const subsets = [];
//   subsets.push([]);
//   let startIndex = 0;
//   let endIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     startIndex = 0;
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       startIndex = endIndex + 1;
//     }
//     endIndex = subsets.length - 1;
//     for (j = 0; j < endIndex + 1; j++) {
//       const set1 = subsets[j].slice(0);
//       set1.push(nums[i]);
//       subsets.push(set1);
//     }
//   }
//   return subsets;
// };

// console.log("Here is the list of subsets: ");
// let result = findSubsets([1, 3, 3]);
// result.forEach((subset) => {
//   console.log(subset);
// });
