const rotateArray1 = function (nums, n) {
  n = n % nums.length;
  if (n < 0) {
    n = n + nums.length;
  }

  
//   if (n < 0) {
//     n = Math.abs(n);
//   }


  for (let i = 0; i < n; i++) {
    nums.unshift(nums.pop());
  }

  return nums;
};


console.log(rotateArray1([1,2,3,4,5,6],-2));
console.log(rotateArray1([1,2,3,4,5,6],2));
