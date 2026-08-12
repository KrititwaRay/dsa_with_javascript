/* Remove duplicate  from array *//* Remove Duplicate From Array */

let arr = [1, 2, 2, 3, 4, 4, 5, 3];



function removeDuplidate_1(arr) {
    let seen = {};
    let write = 0;

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]] === undefined) {
            seen[arr[i]] = true
            arr[write] = arr[i]
            write++
        }


    }
    arr.length = write
    return arr
}

let result = removeDuplidate_1(arr)

console.log(result)