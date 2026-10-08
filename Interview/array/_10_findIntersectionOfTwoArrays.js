
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];


function findIntersectionOfTwoArrays(arr1, arr2) {


    let set = new Set(arr1);
    let result = []

   

    for (let i = 0; i < arr2.length; i++) {

        if(set.has(arr2[i])){
            result.push(arr2[i])
        }

    }

    return [...new Set(result)]

}


let result = findIntersectionOfTwoArrays(arr1, arr2);
console.log(result)