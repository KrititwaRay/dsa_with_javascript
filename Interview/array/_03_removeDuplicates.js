

let arr = [1, 2, 2, 3, 4, 4, 5, 3];

/* If array is unsorted */
function removeDuplicates1(arr) {

    let obj = {};
    let write = 0;

    for (let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]){
            obj[arr[i]] = true
            arr[write] = arr[i]
            write++
        }
    }


    arr.length = write;
    return arr;

}


let result1 = removeDuplicates1(arr);
console.log(result1)


let arr2 = [1, 2, 2, 3, 4, 4, 5, 3];
/* If array is sorted */
function removeDuplicates2(arr2) {

    let index = 0;


    for(let  i = 0; i < arr2.length; i++){
        if(arr2[i] > arr2[index]){
            index ++
            arr2[index] = arr2[i]
        }
    }

    arr2.length = index + 1
    return arr2
}


let result2 = removeDuplicates2(arr2);
console.log(result2)