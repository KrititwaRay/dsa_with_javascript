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


// Bottom down
var maxDepth_2 = function (root) {
    if (!root) return 0;

    let maxDepthLeft = maxDepth_2(root.left);
    let maxDepthRight = maxDepth_2(root.right);

    return 1 + Math.max(maxDepthLeft, maxDepthRight)

};

let result = maxDepth_2(root);
console.log(result)