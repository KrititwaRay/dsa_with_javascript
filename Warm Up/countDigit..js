function countDigit(number) {

    // if negative number make positive
    number = Math.abs(number)

    let count = 0;
    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }
    return count
}

let number = -1
let result = countDigit(number);
console.log(result);