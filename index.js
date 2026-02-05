function countDigit(number) {
    let count = 0;
    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }

    //    console.log(count);
    return count
}


let number = 546
let result = countDigit(number);
console.log(result);