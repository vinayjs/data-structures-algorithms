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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a set of distinct numbers, find all of its permutations.

// const findPermutations = (nums) => {
//   let numsLength = nums.length,
//     result = [],
//     permutations = [];
//   permutations.push([]);
//   for (let i = 0; i < nums.length; i++) {
//     const currentNumber = nums[i];
//     const n = permutations.length;
//     for (let p = 0; p < n; p++) {
//       const oldPermutation = permutations.shift();
//       for (let j = 0; j < oldPermutation.length + 1; j++) {
//         const newPermutation = oldPermutation.slice(0); 
//         newPermutation.splice(j, 0, currentNumber);
//         if (newPermutation.length === numsLength) {
//           result.push(newPermutation);
//         } else {
//           permutations.push(newPermutation);
//         }
//       }
//     }
//   }

//   return result;
// }

// console.log('Here are all the permutations:');
// const result = findPermutations([1, 3, 5]);
// result.forEach((permutation) => {
//   console.log(permutation);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a string, find all of its permutations preserving the character sequence but changing case.

// Input: "ad52"
// Output: "ad52", "Ad52", "aD52", "AD52" 

// const findPermutation = (str) => {
//     permutations = [];
//     permutations.push(str);
//     for (i = 0; i < str.length; i++) {
//         if (isNaN(parseInt(str[i], 10))) {
//             const n = permutations.length;
//             for (j = 0; j < n; j++) {
//                 const chs = permutations[j].split('');
//                 if (chs[i] === chs[i].toLowerCase()) {
//                     chs[i] = chs[i].toUpperCase();
//                 } else {
//                     chs[i] = chs[i].toLowerCase();
//                 }
//                 permutations.push(chs.join(''));
//             }
//         }
//     }
//     return permutations;
// }
// console.log(`String permutations are: ${findPermutation('ad52')}`);