// find the smallest index of the target

let findLowIndex = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor(high / 2);

  while (low <= high) {
    let midElem = nums[mid];

    if (midElem < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    mid = low + Math.floor((high - low) / 2);
  }

  if (low < nums.length && nums[low] === target) {
    return low;
  }

  return -1;
};

//find the high index of the target

let findHighIndex = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor(high / 2);

  while (low <= high) {
    let midElem = nums[mid];

    if (midElem <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    mid = low + Math.floor((high - low) / 2);
  }

  if (high === -1) {
    return high;
  }

  if (high < nums.length && nums[high] === target) {
    return high;
  }

  return -1;
};

console.log(findHighIndex([1, 2, 3, 4, 4, 4, 4, 5, 6], 4));
