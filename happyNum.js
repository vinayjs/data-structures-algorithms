let happyNum = (num) => {
    let slow = num;
    let fast  = num;
    while(true){
        slow = squareNum(slow);
        fast = squareNum(squareNum(fast));
        if(slow == fast){
            break;
        }
    }
    return slow === 1;
}



let squareNum = (num) => {
    let result = 0;
    while(num > 0){
        let digit = num % 10;
        result += digit * digit;
        num = parseInt(num / 10);
    }
    return result;
}

console.log(happyNum(23));
console.log(happyNum(12));