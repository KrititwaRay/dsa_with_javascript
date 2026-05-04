class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null
    }
}


function buildFromArray(arr) {
    if (!arr.length) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let current = queue.shift();


        // left
        if (arr[i] != null) {
            current.left = new TreeNode(arr[i])
            queue.push(current.left)
        }
        i++

        if (arr[i] != null && i < arr.length) {
            current.right = new TreeNode(arr[i])
            queue.push(current.right)
        }
        i++
    }


    return root;
}

let arr =[1,2,3,4,5,null,8,null,null,6,7,9];
let root = buildFromArray(arr);






