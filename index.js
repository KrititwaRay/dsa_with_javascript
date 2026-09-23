let s = "abc";
let t = "ahbgdc";


function isSubsequence(s, t){

    let i = 0;
    let j = 0;


    while(j < t.length){
        if(t[j] == s[i]){
            i++
        }
        j++
    }

    return i === s.length

}


let result = isSubsequence(s, t);
console.log(result)