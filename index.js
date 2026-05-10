class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


function buildFromArray(arr) {
    if (!arr.length) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let current = queue.shift();

        if (arr[i]) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left)

        }
        i++;

        if (arr[i] && i < arr.length) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right)

        }
        i++;


    }
    return root;

}


let arr = [3, 9, 20, null, null, 15, 7]
let root = buildFromArray(arr);


// Top down
var maxDepth_1 = function (root) {
    if (!root) return 0;
    let maxDepth = 0;

    function traversal(current, depth) {
        maxDepth = Math.max(maxDepth, depth);

        current.left && traversal(current.left, depth + 1);
        current.right && traversal(current.right, depth + 1);
    }
    traversal(root, 1);
    return maxDepth

};

let result = maxDepth_1(root);
console.log(result)