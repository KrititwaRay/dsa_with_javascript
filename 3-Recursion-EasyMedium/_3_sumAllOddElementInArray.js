let arr = [5, 3, 2, 0, 3, 6, 7]
function sumOfAllOddNumberInArray(n) {
    let isOdd = (arr[n] % 2) != 0 ? true : false
    if (n == 0) {
        return isOdd == true ? arr[n] : 0
    }

    return isOdd == true ? arr[n] + sumOfAllOddNumberInArray(n - 1) : 0 +  sumOfAllOddNumberInArray(n - 1)

}
let result = sumOfAllOddNumberInArray(arr.length - 1)
console.log(result);