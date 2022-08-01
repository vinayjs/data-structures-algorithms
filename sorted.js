//search for a given number in a sorted array that has been rotated by some arbitrary number

//sample input

// nums = [6, 7, 1, 2, 3, 4, 5];
// target = 3;

// expected output = 4;


let binarySearchRotated = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  if(left > right){
    return -1;
  }
  while (left <= right) {

    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) { 
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {

        right = mid - 1;

      } else {
          left = mid + 1;
      }
    }   else {
          
          if (nums[mid] < target && target <= nums[right]) {
            
            left = mid + 1;
      
          } else {
          
            right = mid - 1;
      }
    }
  }
  return -1;
};


console.log(binarySearchRotated([1,2,3,4,5,8,9,10],9));







