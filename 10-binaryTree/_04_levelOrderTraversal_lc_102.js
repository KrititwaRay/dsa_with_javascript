/* 102. Binary Tree Level Order Traversal */


/* 
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).


Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]



Example 2:
Input: root = [1]
Output: [[1]]


Example 3:
Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
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
 * @return {number[][]}
 */
// Iterative
var levelOrder_1 = function (root) {

    if (!root) return [];
    let ans = [];
    let queue = [root];

    while (queue.length) {
        let levelArr = [];
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let current = queue.shift();

            current.left && queue.push(current.left);
            current.right && queue.push(current.right);

            levelArr.push(current.val);
        }
        ans.push(levelArr);
    }
    return ans;

};


// let result = levelOrder_1(root);
// console.log(result)


// Rercursive
var levelOrder_2 = function (root) {
    
    if(!root) return []
    let ans = [];

    function traversal(current, level){
     
        if (!ans[level]) ans[level] = [];
        ans[level].push(current.val);
        current.left && traversal(current.left, level + 1);
        current.right && traversal(current.right, level + 1);
    }
    traversal(root, 0);
    return ans;
}