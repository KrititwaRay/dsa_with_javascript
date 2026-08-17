let arr = [0,0,1,1,1,2,2,3,3,4]


function removeDuplicate(arr) {

    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[index]) {
            index++

            arr[index] = arr[i]
        }
    }

    arr.length = index + 1
    return arr;
}


let result = removeDuplicate(arr);


console.log(result)