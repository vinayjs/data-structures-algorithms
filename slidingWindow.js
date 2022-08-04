// let findMaxSlidingWindow = (nums, windowSize) => {
//   const result = [];
//   for (let i = 0; i <= nums.length - windowSize; i++) {
//     const max = findMax(i, windowSize, nums);
//     result.push(max);
//   }
//   return result;
// };

// const findMax = (index, size, array) => {
//   const result = [];
//   for (let i = 0; i < size; i++) {
//     result.push(array[index]);
//     index += 1;
//   }
//   return Math.max(...result);
//   //return result;
// };

// console.log(findMaxSlidingWindow([1,2,3,4,5,6], 3));

// // console.log(findMaxSlidingWindow([1, 3, 4], 1));

//Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.

// const avg = (k, arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length - k + 1; i++) {
//     let sum = 0.0;
//     for (let j = i; j < i + k; j++) {
//       sum += arr[j];
//     }
//     result.push(sum / k);
//   }
//   console.log(result);
// };

// avg(2, [2,4,6]);
// avg(2, [2,4,6,8,10,12]);
// time complexity - O(n*k);

// let findMaxSlidingWindow = (k, arr) => {
//   const result = [];
//   let windowSum  = 0.0
//       windowStart = 0
//   for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
//     windowSum += arr[windowEnd];

//     if(windowEnd >= k-1) {
//       result.push(windowSum / k)
//       windowSum -= arr[windowStart];
//       windowStart += 1;
//       }
//     }
//     return result;
//   }

// console.log(findMaxSlidingWindow(2, [2,4,6]));

// Given an array of positive numbers and a positive number ‘k,’ 
// find the maximum sum of any contiguous subarray of size ‘k’.

// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

// sol-1-

// const maxArray = (k, arr) => {
//   let maxSub = 0;
//   let maxSum = 0;
//   for(let i = 0; i < arr.length - k + 1; i++){
//     maxSum = 0;
//     for(let j = i; j < i + k; j++) {
//       maxSum += arr[j];
//     }
//      maxSub = Math.max(maxSub,maxSum)
//   }
//   return maxSub;
// }

// console.log(maxArray(3, [2, 1, 5, 1, 3, 2]));



//- sol 2---using sliding window.

// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9

// const maxSum = (k, arr) => {
//   let start = 0
//   let  windowSum = 0
//   let  maxSum = 0

//   for( let i = 0; i < arr.length; i++){
//     windowSum += arr[i];

//     if(i >= k - 1){
//       maxSum = Math.max(maxSum, windowSum);
//       windowSum -= arr[start];
//       start += 1;
//     }
//   }
//   return maxSum;
// }

//Smallest Subarray With a Greater Sum

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

const smallSubArray = (s, arr) => {
  let minLength = Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for(let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    while(windowSum >= s) {
      minLength = Math.min(minLength, i - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1
    }
  }

  if(minLength === Infinity) {
    return 0;
  }
  return minLength;
}

console.log(smallSubArray(7, [2, 1, 5, 2, 3, 2]));