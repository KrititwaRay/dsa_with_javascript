let str = ["h","e","l","l","o"];

function reverseString(atr){

    /* let start = 0;
    let end = str.length - 1;

    while(start < end){
        let temp = str[end]
        str[end] = str[start]
        str[start] = temp
        start ++
        end --
    } */

    for(let i = 0; i < Math.floor(str.length / 2); i++){
        console.log(str[i])

        let temp = str[i];
        str[i] = str[str.length - 1 - i]

        str[str.length - 1 - i] = temp
    }

}

reverseString(str)

console.log(str)