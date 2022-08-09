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


const slide = (arr, k) => {
    let sumWindow = 0;
    let sub = [];
    start = 0;
    for(let i = 0; i < arr.length; i++){
        sumWindow += arr[i];
        if( i >= k -1){
            sub.push(sumWindow);
            sumWindow -= arr[start];
            start += 1;
        }
    }
    return sub;
}

console.log(slide([1,2,3,4,5,6], 3))