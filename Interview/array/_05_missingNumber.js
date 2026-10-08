

let arr = [1, 2, 3, 5, 6];

function missingNumber(arr){

     let n = arr.length + 1;

    let sumOfNNumber = (n * (n + 1)) / 2;

    let totalSum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)

    return sumOfNNumber - totalSum
}


let result = missingNumber(arr);
console.log(result)