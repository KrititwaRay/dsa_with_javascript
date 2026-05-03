let arr = [2, 7, 11, 15];
let target = 9;


function twoSum(arr, target) {

    let map = new Map();

    for(let i = 0; i < arr.length; i++){
        map.set(arr[i], i)
    }


    for(let i = 0; i < arr.length; i++){
        let targetVal = target - arr[i]
        
        if(map.get(targetVal) && map.get(targetVal) != i){
            return [i , map.get(targetVal)]
        }
    }

    

}

let result = twoSum(arr, target);
console.log(result)