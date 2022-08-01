let findMaxSlidingWindow = (nums, windowSize) => {
  const result = [];
  for (let i = 0; i <= nums.length - windowSize; i++) {
    const max = findMax(i, windowSize, nums);
    result.push(max);
  }
  return result;
};

const findMax = (index, size, array) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(array[index]);
    index += 1;
  }
  return Math.max(...result);
  //return result;
};

console.log(findMaxSlidingWindow([1,2,3,4,5,6], 3));

// console.log(findMaxSlidingWindow([1, 3, 4], 1));


