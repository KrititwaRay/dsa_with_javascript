/* 145. Binary Tree Postorder Traversal */

/* 
Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [3,2,1]


Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,6,7,5,2,9,8,3,1]


Example 3:
Input: root = []
Output: []

Example 4:
Input: root = [1]
Output: [1]


Constraints:

The number of the nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


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