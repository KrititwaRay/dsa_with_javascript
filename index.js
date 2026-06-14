let nums =  [2,7,11,15];
let target = 9;


let map = new Map();



for(let i = 0; i < nums.length; i++){
    map.set(nums[i], i)
}


for(let i = 0; i< nums.length; i++){
    let pairToFind = target - nums[i]

    

    if (map.get(pairToFind) && map.get(pairToFind) != i){
        return [map.get(pairToFind), i]
    }
}