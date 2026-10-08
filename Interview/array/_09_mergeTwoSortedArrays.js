let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];


function mergeSortedArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let resultArr = []


    while (i < arr1.length &&  j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            resultArr.push(arr1[i])
            i++
        } else {
            resultArr.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        resultArr.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        resultArr.push(arr2[j])
        j++
    }


    return resultArr;

}


let result = mergeSortedArrays(arr1, arr2);
console.log(result)