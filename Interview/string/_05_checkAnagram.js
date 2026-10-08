let str1 = "listen"
let str2 = "silent"

function checkAnagram(str1, str2) {

    if (str1.length !== str2.length) return false

    let map = new Map();

    for (let i = 0; i < str1.length; i++) {
        let char = str1.charAt(i);

        if (!map.has(char)) {
            map.set(char, 1)
        } else {
            let val = map.get(char)
            map.set(char, ++val)
        }
    }

    for (let i = 0; i < str2.length; i++) {
        let char = str2.charAt(i)

        if (!map.has(char)) return false;

        map.set(char, map.get(char) - 1);

        if (map.get(char) < 0) return false
    }

    return true
}

let result = checkAnagram(str1, str2);

console.log(result) 