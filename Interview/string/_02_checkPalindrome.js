let str = "aba"


function checkPalindrome(str){

     let s = 0;
    let e = str.length - 1;

    while (s < e) {
        if (str.charAt(s) !== str.charAt(e)) {
            return false;
        }

        s++;
        e--;
    }

    return true;
}

let result = checkPalindrome(str);

console.log(result)