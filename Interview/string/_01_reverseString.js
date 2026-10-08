


let str = "abc";
function reverseString1(str){

    if(str.length <= 1) return str
    let newStr = ""

    for(let i = 0; i < str.length; i++){
        newStr = str.charAt(i) + newStr
    }

    return newStr
}



let result = reverseString1(str);
console.log(result)


let str1 = "xyz";
function reverseString2(str2){

    let arr = str1.split("")
  

    let l = 0;
    let r = str.length - 1;

    while(l < r){
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++
        r--
    }

    return arr.join("")

}

let result1 = reverseString2(str1);

console.log(result1)