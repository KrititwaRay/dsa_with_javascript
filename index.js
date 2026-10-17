let arr = [1,[2,3,4],[5,6,7,[8,9,10]]]


function flatArray(arr){

    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i])){
            newArr.push(arr[i])
        }else{
           newArr = newArr.concat(flatArray(arr[i]))
        }
    }

    return newArr
}

let result = flatArray(arr);
console.log(result)