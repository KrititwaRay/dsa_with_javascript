 function _1_sumAllElementInArray(arr) {

    if (arr.length == 0) return 0;

    return arr.pop() + _1_sumAllElementInArray(arr)

}

// let result = _1_sumAllElementInArray([5, 3, 2, 0, 1])
// console.log(result);s


let arr = [5, 3, 2, 0, 1]
function sumAllElementInArray(n) {

    if (n == 0) return arr[n];

    return arr[n] + sumAllElementInArray(n - 1)

}
let result = sumAllElementInArray(arr.length - 1)
console.log(result);