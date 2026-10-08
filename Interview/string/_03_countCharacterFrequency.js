

let str = "hello";

function countCharacterFrequency(str){

    let map = new Map();


    for(let i = 0; i < str.length; i++){
        if(!map.has(str.charAt(i))){
            map.set(str.charAt(i), 1)
        }else{
            let val = map.get(str.charAt(i))
            let char = str.charAt(i)
            map.set(char, ++val)
        }
    }

    return map

}


let result = countCharacterFrequency(str);
console.log(result)