/* 104. Maximum Depth of Binary Tree */


/* 

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


Example 1:
        3
       / \
      9   20
         /  \
        15   7

Input: root = [3,9,20,null,null,15,7]
Output: 3


Example 2:
   1
    \
     2
Input: root = [1,null,2]
Output: 2


Constraints:

1. The number of nodes in the tree is in the range [0, 104].
2. -100 <= Node.val <= 100

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
 * @return {number}
 */



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

// let result = maxDepth_1(root);
// console.log(result)