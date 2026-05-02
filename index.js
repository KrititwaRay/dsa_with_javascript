class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


function buildFromArray(arr) {


    if (!arr.length) return null

    let root = new TreeNode(arr[0]);
    let queue = [root]
    let i = 1;

    while (i < arr.length) {

        let current = queue.shift()

        // left
        if (arr[i] != null) {
            current.left = new TreeNode(arr[i])
            queue.push(current.left)
        }
        i++
        // right
        if (i < arr.length && arr[i] != null) {
            current.right = new TreeNode(arr[i])
            queue.push(current.right)
        }
        i++

    }

    return root;
}

let arr = [1, null, 2, 3];
let root = buildFromArray(arr);


var postorderTraversal = function (root) {

    // left -> right -> root

    let ans = [];

    function traversal(current) {
        if (!current) return;
        traversal(current.left)
        traversal(current.right)
        ans.push(current.val)

    }

    traversal(root);
    return ans
};

let result = postorderTraversal(root);
console.log(result)