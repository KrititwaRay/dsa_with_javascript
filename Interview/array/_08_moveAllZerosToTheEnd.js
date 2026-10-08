



let arr = [0, 1, 0, 3, 12];

function moveAllZerosToTheEnd(arr) {


    let index = 0;
    let temp;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            temp = arr[i];
            arr[i] = arr[index]
            arr[index] = temp
            index++
        } 
    }


    return arr
}


let result = moveAllZerosToTheEnd(arr);
console.log(result)