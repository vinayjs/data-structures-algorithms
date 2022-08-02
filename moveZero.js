let moveZeroleft = (nums) = {
    let lengthNums = nums.length;


    if (lengthNums < 1) {
    return;
    }

    let writeIndex = lengthNums -1;
    let readIndex = lengthNums -1;

    while(readIndex >= 0){

        if(nums[readIndex] != 0){

          nums[writeIndex] = nums[readIndex];
          writeIndex-- 
        }
        readIndex--;
    }

    while(writeIndex >= 0){
        nums[writeIndex] = 0;
        writeIndex--;
    }
}