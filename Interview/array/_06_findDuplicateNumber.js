

let arr = [1, 3, 4, 2, 2];

function findDuplicateNumber(arr) {

    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {

        if (seen.has(arr[i])) return arr[i]
        seen.add(arr[i])
    }


    return -1
}


let result = findDuplicateNumber(arr);
console.log(result)